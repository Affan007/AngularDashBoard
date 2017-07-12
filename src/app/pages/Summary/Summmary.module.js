(function () {
  'use strict';

  angular.module('BlurAdmin.sides.summary', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('summary.revenue', {
        url: '/Revenue',
        templateUrl: 'app/pages/Summary/revenue.html',
          title: 'Revenue',
          sidebarMeta: {
            order: 10,
          },
        controller: 'revenueCtrl'
    })

    .state('summary.sales', {
        url: '/sales',
          title: 'Total Sales',
          sidebarMeta: {
            order: 8,
          },
        templateUrl: 'app/pages/Summary/sales.html',
        controller: 'salesCtrl'
    })
  }

})();
