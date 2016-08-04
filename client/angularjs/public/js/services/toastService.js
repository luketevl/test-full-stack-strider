(function(){
  'use strict';

  angular.module('app').factory('toastService', toastService);

  toastService.$inject = ['$mdToast'];
  function toastService($mdToast){
      var _show = function(value) {
        $mdToast.show(
          $mdToast.simple()
            .textContent(value)
            .hideDelay(3000)
        );
      };
      return {
        show: _show,
      }
  }
})();
