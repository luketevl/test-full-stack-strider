(function(){
  'use strict';

  angular.module('app').controller('appCtrl', appCtrl);

  appCtrl.$inject = ['$scope', '$mdSidenav', '$mdDialog', 'toastService'];

  function appCtrl($scope, $mdSidenav, $mdDialog, toastService){
    $scope.openMenu = function() {
    $mdSidenav('right').toggle();
  };
  $scope.todos = [
    { id: 2, name: 'Pepperoni', complete: true },
    { id: 3, name: 'Sausage', complete: false },
    { id: 4, name: 'Black Olives', complete: true },
    { id: 5, name: 'Green Peppers', complete: false }
  ];

  $scope.doAddAction = function(){
    $scope.todos.push({
      id: Date.now(),
      name: '',
      complete: false,
      photo: ''
    }
    );
  };

  $scope.doCompleteAction = function(index, todo){
    $scope.todos[index].complete = !todo.complete;
  };
  $scope.doEditAction = function(event, todo) {
    $mdDialog.show(
      $mdDialog.prompt()
        .title('Edit todo: '+ todo.name)
        .textContent()
        .ariaLabel()
        .ok('Save')
        .cancel('Cancel')
        .targetEvent(event)
    ).finally(function(param){
      console.log(param);
      toastService.show('TODO edited');
    });
  };

  $scope.doDeleteAction = function(index) {
    $scope.todos.splice(index, 1);
    toastService.show('TODO deleted');
  };

  $scope.doPhotoAction = function(event, todo) {
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

  }
})();
