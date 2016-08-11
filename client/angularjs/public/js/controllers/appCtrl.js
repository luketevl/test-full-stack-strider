(function(){
  'use strict';

  angular.module('app').controller('appCtrl', appCtrl);

  appCtrl.$inject = ['$scope', '$mdSidenav', '$mdDialog', 'toastService', 'todoAPIService', 'Upload', '$timeout', 'config', '$mdMedia'];

  function appCtrl($scope, $mdSidenav, $mdDialog, toastService, todoAPIService, Upload, $timeout, config, $mdMedia){
    let intervalKeyup ="";
    $scope.openMenu = function() {
    $mdSidenav('right').toggle();
  };

  let msgSucess = () => {
    toastService.show('Saved!');
  };

  $scope.getAll = () =>{
    todoAPIService.get().then(result =>{
      $scope.todos = result.data;
    }).catch(error => {
      console.log(error);
    });
  };
  $scope.getAll();
  $scope.doAddAction = function(){
    $scope.todos.push({
      name: '',
      checked: false,
    }
    );
  };

  $scope.doCompleteAction = function(index, todo, change){
    if(change){
      $scope.todos[index].checked = !todo.checked;
    }
    $scope.doEditAction(index, todo);
  };
  $scope.doEditAction = function(index, todo) {
    if(todo._id){
      todoAPIService.edit(todo).then((result) => {
        msgSucess();
      }).catch((error) => {
        console.log(error);
      });
    }
    else{
      $scope.doSaveAction(index, todo);
    }
  };
  $scope.doKeyup = (index, todo) => {
			if(intervalKeyup!=""){
        clearTimeout(intervalKeyup);
      }
			intervalKeyup = setTimeout(function(){
				intervalKeyup ="";
        if(todo.name){
          $scope.doEditAction(index, todo);
        }
			}, 800);
  };

  $scope.doSaveAction = function(index, todo){
      todoAPIService.add(todo).then((result) => {
        $scope.todos[index] = result.data.todo;
        msgSucess();
      }).catch((error) => {
        console.log(error);
      });
  };

  $scope.doDeleteAction = function(index, todo) {
    todoAPIService.delete(todo._id).then((result) => {
      $scope.todos.splice(index, 1);
      toastService.show('Deleted!');
    }).catch((error) => {
      console.log(error);
    });

  };


  $scope.doPhotoShow = function(todo) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $scope.photo_todo = todo;
      $mdDialog.show({
        controller: appCtrl,
        
        templateUrl: 'views/photo.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      }).finally(function(){

    });
  };

      $scope.log = '';
      $scope.uploadFiles = function(file, errFiles, index, todo) {
        console.log(file);
        console.log(todo);
              $scope.f = file;
              $scope.errFile = errFiles && errFiles[0];
              if (file) {
                  let method = 'POST';
                  if(todo._id){
                    method= 'PUT';
                  }
                  file.upload = Upload.upload({
                      url: config.URL_REST,
                      method,
                      data: todo,
                      file: file
                  });

                  file.upload.then(function (response) {
                      $timeout(function () {
                        console.log(response);
                          file.result = response.data.todo;
                          $scope.todos[index].img = response.data.todo.img;
                      });
                  }, function (response) {
                      if (response.status > 0)
                          console.log(response.status + ': ' + response.data);
                  }, function (evt) {
                    console.log(evt);
                  });
              }
          };
  }
})();
