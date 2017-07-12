/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dash/dash.html',
            redirectTo: 'dashboard.form.inputs',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 800,
          },
          // resolve: {
          //           security: function(User) {
          //               return User.getMessage();
          //           }
          //       }
        })
        .state('accountDetails', {
          url: '/accDetails',
          templateUrl: 'app/pages/accountDetails/accountDetails.html',
          title: 'Account Details',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1600,
          },
          // resolve: {
          //           security: function(User) {
          //               return User.getMessage();
          //           }
          //       }
        })
        .state('summary', {
          url: '/summary',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/summary/summaryMod',
          title: 'summary',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1000,
          },

        })
        .state('reseller', {
          url: '/reseller',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/reseller/resellerMod',
          title: 'Reseller',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1100,
          },
        })
        .state('prospects', {
          url: '/prospects',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/prospects/prospectsMod',
          title: 'prospects',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1200,
          },
        })
        .state('IPTV', {
          url: '/IPTV',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/IPTV/IPTVsales',
          title: 'IPTV',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1300,
          },
        })
        .state('box', {
          url: '/box',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/box/addBox',
          title: 'Manage Boxes',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1500,
          },
        })
        .state('tickets', {
          url: '/tickets',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/tickets/SupportTickets',
          title: 'Support Tickets',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1400,
          },
          controller: 'ticketsCtrl'
        });

  }

})();
