(function () {
  'use strict';

  angular.module('BlurAdmin.sides.IPTV', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('IPTV.sales', {
        url: '/IPTVsales',
        templateUrl: 'app/pages/IPTV/sales.html',
          title: 'IPTV Sales',
          sidebarMeta: {
            order: 10,
          },
        controller: 'IPTVCtrl'
    })
    .state('IPTV.addNewSale', {
        url: '/addNewSale',
        templateUrl: 'app/pages/IPTV/addNewSale.html',
          title: 'Add New Sale',
          sidebarMeta: {
            order: 11,
          },
        controller: 'IPTVCtrl'
    })
    .state('IPTV.subscription', {
        url: '/subscription',
        templateUrl: 'app/pages/IPTV/subscription.html',
          title: 'Subscriptions',
          sidebarMeta: {
            order: 12,
          },
        controller: 'IPTVsubscriptionCtrl'
    })
    .state('IPTV.RenewSubscription', {
        url: '/RenewSubscription',
        templateUrl: 'app/pages/IPTV/RenewSubscription.html',
          title: 'Renew Subscription',
          sidebarMeta: {
            order: 14,
          },
        controller: 'IPTVsubscriptionCtrl'
    })


  }

})();
