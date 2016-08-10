(function(){
  'use strict';

  angular.module('app').controller('appCtrl', appCtrl);

  appCtrl.$inject = ['$scope', '$mdSidenav', '$mdDialog', 'toastService', 'todoAPIService', 'Upload', '$timeout', 'config'];

  function appCtrl($scope, $mdSidenav, $mdDialog, toastService, todoAPIService, Upload, $timeout, config){
    $scope.todoNow='';
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
				$scope.doEditAction(index, todo);
			}, 500);
  };

  $scope.doSaveAction = function(index, todo){
      todoAPIService.add(todo).then((result) => {
        $scope.todos[index] = result.data.result;
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


  $scope.doPhotoAction = function(event, todo) {
    $scope.todoNow= todo;
    $mdDialog.show(
      $mdDialog.alert()
        .title('Photo')
        .textContent('')
        .ariaLabel('')
        .ok('Close')
        .targetEvent(event)
    ).finally(function(){

    });
  };


  $scope.$watch('files', function () {
          $scope.upload($scope.files);
      });
      $scope.$watch('file', function () {
          if ($scope.file != null) {
              $scope.files = [$scope.file];
          }
      });
      $scope.log = '';

      $scope.upload = function (files) {
        console.log('efwefewffw');
          if (files && files.length) {
              for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.$error) {
                  let method = 'POST';
                  if($scope.todonow._id){
                    method= 'PUT';
                  }
                  Upload.upload({
                      url: config.URL_REST,
                      method,
                      data: {
                        todo: $scope.todoNow,
                        file
                      }
                  }).then(function (resp) {
                      $timeout(function() {
                        console.log(resp);
                          $scope.log = 'file: ' +
                          resp.config.data.file.name +
                          ', Response: ' + JSON.stringify(resp.data) +
                          '\n' + $scope.log;
                      });
                  }, null, function (evt) {
                    console.log(evt);
                      var progressPercentage = parseInt(100.0 *
                      		evt.loaded / evt.total);
                      $scope.log = 'progress: ' + progressPercentage +
                      	'% ' + evt.config.data.file.name + '\n' +
                        $scope.log;
                  });
                }
              }
          }
      };

  }
})();
