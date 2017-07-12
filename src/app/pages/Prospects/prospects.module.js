(function () {
  'use strict';

  angular.module('BlurAdmin.sides.prospects', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('prospects.resellerMod', {
        url: '/prospectsMod',
        templateUrl: 'app/pages/Prospects/prospects.html',
          title: 'Summary',
          sidebarMeta: {
            order: 10,
          },
        controller: 'prospectsCtrl'
    })
    .state('prospects.addNew', {
        url: '/prospectsaddNew',
        templateUrl: 'app/pages/Prospects/addprospects.html',
          title: 'Add New Prospect',
          sidebarMeta: {
            order: 11,
          },
        controller: 'prospectsCtrl'
    })

  }

})();
