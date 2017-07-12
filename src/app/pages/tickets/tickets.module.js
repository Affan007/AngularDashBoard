(function () {
  'use strict';

  angular.module('BlurAdmin.sides.tickets', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('tickets.SupportTickets', {
        url: '/supportTickets',
        templateUrl: 'app/pages/tickets/tickets.html',
          title: 'Support Tickets',
          sidebarMeta: {
            order: 10,
          },
          resolve: {
              security: function(User,$location) {
                  //  return User.SetUser();
                  if(User.SetUser=='Owner'){
                    $location.path('/supportTickets');
                    title:''
                  }
                  else{
                    $location.path('/');
                  }

                  // console.log ();
              }
          },
        controller: 'ticketsCtrl'



    })
    .state('tickets.addtickets', {
        url: '/addTickets',
        templateUrl: 'app/pages/tickets/addtickets.html',
          title: 'Add New Ticket',
          sidebarMeta: {
            order: 11,
          },
        controller: 'ticketsCtrl'
    })
  }

})();
