(function () {
  'use strict';

  angular.module('BlurAdmin.sides.box', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('box.details', {
        url: '/boxDetails',
        templateUrl: 'app/pages/kuBox/box.html',
          title: 'Box Details',
          sidebarMeta: {
            order: 10,
          },
        controller: 'boxCtrl'
    })
    .state('box.addBox', {
        url: '/addBox',
        templateUrl: 'app/pages/kuBox/addBox.html',
          title: 'Add New Box',
          sidebarMeta: {
            order: 11,
          },
        controller: 'boxCtrl'
    })
  }

})();
