/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .directive('changePass',changePass);

  /** @ngInject */
  function changePass() {
    return {
      restrict: 'E',
      controller: 'changePassCtrl',
      templateUrl: 'app/pages/accountDetails/changePass/changePass.html'
    };
  }
})();
