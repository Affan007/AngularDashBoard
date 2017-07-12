/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.summary')
      .controller('myAccountCtrl', SummaryCtrl);
  function SummaryCtrl($scope, $state, $window, $timeout,User) {
    console.log("hi");
    $scope.rowCollection = [
       {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
       {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
       {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
   ];

    var vm=this;
    $scope.pass = {};

    $scope.SalesSummary= function() {

        $scope.ResselrsArray=[]
        $scope.packages1=[]

        User.SalesSummary()
            .success(function(data) {
               console.log(data)
                $scope.Sales=data.sales
                $scope.packages=data.packages
                console.log($scope.packages)
               for(var keyName in data.sales) {
                   var key = keyName;

                   var dataReqtemp = data.sales[key]

                  //  var dataReqtemp2 = dataReqtemp[dataReqtemp.length - 1];
                   console.log(dataReqtemp.agent_name)
                     $scope.ResselrsArray.push(dataReqtemp.agent_name);

               }
               console.log( $scope.ResselrsArray);
              //  packages.forEach(function(packages){
              //    $scope.packageName=packages.description
               //
              //  });
              //  $scope.packages.push($scope.packageName);
              //  console.log($scope.packages)
            })
            .error(function(data) {
                console.log(data)
            })
    }

    $scope.UserInfo= function() {

        User.UserInfo()
            .success(function(data) {
              console.log(data);
              $scope.MyInfo=data.user;
            })
            .error(function(data) {
                console.log(data)
            })
    }



    $scope.UpdatePassword = function(isValid) {
      // $scope.pass={
      //   'oldpass': null,
      //   'password':null
      // }
        // $scope.startSpin();

        var userdata={
            'oldPassword':$scope.pass.oldPass,
            'password':$scope.pass.password
        };

        // var userdata=$scope.pass;
        User.UpdatePassword(userdata)
            .success(function(data) {
              console.log(data);
              $scope.MyInfo=data.user;
            })
            .error(function(data) {
                console.log(data)
            })
    }



    }
  /** @ngInject */


})();
  angular.module('BlurAdmin.sides.summary').directive("matchPassword", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=matchPassword"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.matchPassword = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});
