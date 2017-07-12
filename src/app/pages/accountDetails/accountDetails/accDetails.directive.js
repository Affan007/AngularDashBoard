/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .directive('accDetails',accDetails);

  /** @ngInject */
  function accDetails() {
    return {
      restrict: 'E',
      controller: 'accDetailsCtrl',
      templateUrl: 'app/pages/accountDetails/accountDetails/accDetails.html'
    };
  }
})();
