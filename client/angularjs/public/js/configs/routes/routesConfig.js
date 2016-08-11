(function(){
  'use strict';

  angular.module('app').config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider){
    // Route TODOS
    $routeProvider.when('/todos', {
      templateUrl: '/views/todos.html',
      controller:  'appCtrl',
    });

    // DEFAULT route
    $routeProvider.otherwise({redirectTo: '/todos'});
  }
})();
