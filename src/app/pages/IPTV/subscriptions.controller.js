/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.IPTV')
      .controller('IPTVsubscriptionCtrl', IPTVsubscriptionCtrl);
  function IPTVsubscriptionCtrl($scope, $state, $window, $timeout,User) {
    console.log("hi");
    $scope.standardItem = {};
    $scope.TagDep = [
      {label: 'BD Department', value: 'BD Department'},
      {label: 'Customer Support', value:'Customer Support'},
      {label: 'Tech Support', value:'Tech Support'}
    ];

    $scope.commisionSelectItems = [
      {label: 'Persentage', value: 'Persentage'},
      {label: 'Fixed', value:'Fixed'}
    ];
    $scope.IPTVmodels = [
      {label: 'Clearance $129.99', value: 'BD Department'},
      {label: 'Z1', value:'Z1'},
      {label: 'Z2', value:'Z2'},
      {label: 'Z3', value:'Z3'},
      {label: 'Z4 Freedom', value:'Z4 Freedom'}
    ];
    $scope.IPTVsubscriptions=[
      {label: 'No Subscription', value: 'No Subscription'},
      {label: '1 Month', value:'1 Month'},
      {label: '3 Month', value:'3 Month'},
      {label: '6 Month', value:'6 Month'},
      {label: '1 Year', value:'1 Year'}
    ];
    $scope.subscriptions=$scope.IPTVsubscriptions[0];

    $scope.IPTVserver=[
      {label: 'Canadian GTA Price', value: 'Canadian GTA Price'},
      {label: 'HD', value:'HD'},
      {label: 'HD * Premium', value:'HD * Premium'},
      {label: 'HD * Premium ANNUAL', value:'HD * Premium ANNUAL'},
      {label: 'HD & PPV * Premium', value:'HD & PPV * Premium'},
      {label: 'HD & PPV * Premium ANNUAL', value:'HD & PPV * Premium ANNUAL'},
      {label: 'HD ANNUAL', value:'HD ANNUAL'}
    ];

    $scope.IPTVcurrency=[
      {label: 'USD', value:'USD'},
      {label: 'AUD', value: 'AUD'},
      {label: 'CAD', value:'CAD'},
      {label: 'EUR', value:'EUR'},
      {label: 'GBP', value:'GBP'},
      {label: 'GHS', value:'GHS'}
    ];
    $scope.currency=  $scope.IPTVcurrency[0];

    $scope.IPTVShippingMethod=[
      {label: 'Standard', value: 'Standard'},
      {label: 'Express', value:'Express'}
    ];

      $scope.shippingMethod=  $scope.IPTVShippingMethod[0]

      $scope.IPTVpaymentMethod=[
        {label: 'Credit Card', value: 'Credit Card'},
        {label: 'Debit Card', value:'Debit Card'},
        {label: 'Paypal', value:'Paypal'}
      ];

      $scope.IPTVautoRenew=[
        {label: 'No', value: 'No'},
        {label: 'Yes', value:'Yes'}
      ];
      $scope.autoRenew=$scope.IPTVautoRenew[0];


    // $scope.PickTagDep=$scope.commisionSelectItems[0];
    $scope.smartTablePageSize = 10;

    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }

    $scope.smartTableData = [
      {
        id: 1,
        Count: '1',
        Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'pending'      },
      {
        id: 2,
        Count: '2',
        Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 3,
        Count: '3',
        Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 4,
        Count: '4',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 5,
        Count: '5',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 6,
        Count: '6',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 7,
        Count: '7',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 8,
        Count: '8',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 9,
        Count: '9',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 11,
        Count: '11',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 12,
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 13,
        Count: '13',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 14,
        Count: '14',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 15,
        Count: '15',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 16,
        Count: '16',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 17,
        Count: '17',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 18,
        Count: '18',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 19,
        Count: '19',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 20,
        Count: '20',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 21,
        Count: '21',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 22,
        Count: '22',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 23,
        Count: '23',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 24,
        Count: '24',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 25,
        Count: '25',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 26,
        Count: '26',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 27,
        Count: '27',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 28,
        Count: '28',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 29,
        Count: '29',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 30,
        Count: '30',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
        {
        id: 31,
        Count: '31',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 32,
        Count: '32',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 33,
        Count: '33',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 34,
        Count: '34',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'
      },
      {
        id: 35,
        Count: '35',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      },
      {
        id: 36,
        Count: '36',
          Customer: '123456789',
        Device: 'G3',
        Server: 'HD',
        Months:'3',
        Amount:'40',
        date:'22-Aug-2016 03:00 PM',
        status: 'open'      }

    ];




    }
  /** @ngInject */


})();
