(function(){
  'use strict';

  angular.module('app').factory('todoAPIService', todoService);

  function todoService($http, config){
    /**
      * GET todo
      * @author lukete
      * @param todo
      * @return $http response
    **/
    var _get = function() {
      return $http.get(config.URL_REST);
    };

    /**
      * ADD todo
      * @author lukete
      * @param todo
      * @return $http response
    **/
    var _add = function(todo) {
      return $http.post(config.URL_REST, todo);
    };

    /**
      * DELETE todo
      * @author lukete
      * @param todo
      * @return $http response
    **/
    var _delete = function(_id) {
      return $http.delete(config.URL_REST+`/${_id}`);
    };
    /**
      * EDIT todo
      * @author lukete
      * @param todo
      * @return $http response
    **/
    var _edit = function(todo) {
      return $http.put(config.URL_REST, todo);
    };
    return {
      get: _get,
      add: _add,
      edit: _edit,
      delete: _delete,
    }
  }
})();
