(function () {
  'use strict';

  angular.module('BlurAdmin.signin', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('signin', {
        url: '/signin',
        templateUrl: 'app/pages/Login/Login.html',
        controller: 'SignInCtrl'

    })
  }

})();
