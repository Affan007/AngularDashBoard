/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.tickets')
      .controller('ticketsCtrl', ticketsCtrl);
  function ticketsCtrl($scope, $state, $window, $timeout,User) {
    console.log("hi");
  

    $scope.standardItem = {};
    $scope.Department = [
      {label: 'Accounts & Billing', value: 'Accounts & Billing'},
      {label: 'Domestic Topup', value:'Domestic Topup'},
      {label: 'Gneneral', value: 'Gneneral'},
      {label: 'Home phone', value: 'Home phone'},
      {label: 'Home Phone Activation', value: 'Home Phone Activation'},
      {label: 'International Topup', value: 'International Topup'},
      {label: 'Internet Services', value: 'Internet Services'},
      {label: 'IPTV', value: 'IPTV'},
      {label: 'IPTV Activation', value: 'IPTV Activation'},
      {label: 'long Distance Calling', value: 'long Distance Calling'},
      {label: 'Refunds', value: 'Refunds'}
    ];

    $scope.subject = [
      {label: 'Bell Ringing / IVR during Calls', value: 'Bell Ringing / IVR during Calls'},
      {label: 'Distortion', value:'Distortion'},
      {label: 'IVR Responses in English/Urdu', value:'IVR Responses in English/Urdu'},
      {label: 'Local Access Number', value:'Local Access Number'},
      {label: 'Mistake in New Account', value:'Mistake in New Account'},
      {label: 'Mistake in Recharge', value:'Mistake in Recharge'},
      {label: 'Number is Unreachable', value:'Number is Unreachable'},
      {label: 'Pin Number Issue', value:'Pin Number Issue'},
      {label: 'Poor Services', value:'Poor Services'},
      {label: 'Recurring Issues', value:'Recurring Issues'},
      {label: 'Refund', value:'Refund'},
      {label: 'Register Number', value:'Register Number'}
    ];
    // $scope.selectedcommision=$scope.commisionSelectItems[0];
    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        Count: '1',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 2,
        Count: '2',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 3,
        Count: '3',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 4,
        Count: '4',
        amount: '2000',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 5,
        Count: '5',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 6,
        Count: '6',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 7,
        Count: '7',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 8,
        Count: '8',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 9,
        Count: '9',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 11,
        Count: '11',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 12,
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 13,
        Count: '13',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 14,
        Count: '14',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 15,
        Count: '15',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 16,
        Count: '16',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 17,
        Count: '17',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 18,
        Count: '18',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 19,
        Count: '19',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 20,
        Count: '20',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 21,
        Count: '21',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 22,
        Count: '22',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 23,
        Count: '23',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 24,
        Count: '24',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 25,
        Count: '25',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 26,
        Count: '26',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 27,
        Count: '27',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 28,
        Count: '28',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 29,
        Count: '29',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 30,
        Count: '30',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 31,
        Count: '31',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 32,
        Count: '32',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 33,
        Count: '33',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 34,
        Count: '34',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 35,
        Count: '35',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 36,
        Count: '36',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      }


    ];




    $scope.stats={
      Credits: 539,
      Debits: 339,
      Balance: 1000
    }


    }
  /** @ngInject */


})();
