/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.summary')
      .controller('revenueCtrl', revenueCtrl);
  function revenueCtrl($scope, $state, $window, $timeout,User) {
    console.log("hi");
    $scope.rowCollection = [
       {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
       {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
       {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
   ];
   $scope.final=[]

    $scope.revenue = function() {
        // var userdata={
        //   'username': $scope.UserName,
        //   'password': $scope.Password
        //
        // };

        $scope.RevenueArray=[]
        $scope.keys=[]
        $scope.packages1=[]
        $scope.final=[]

        User.Revenue()
            .success(function(data) {
               console.log(data)
                $scope.revenue=data
                // $scope.packages=data
                console.log($scope.packages)
                var i=0;
               for(var keyName in data) {
                   var key = keyName;
                   var dataReqtemp = data[key]

                  //  var dataReqtemp2 = dataReqtemp[dataReqtemp.length - 1];
                  //  console.log(dataReqtemp)
                     $scope.RevenueArray.push(dataReqtemp);
                     var dateObj = new Date(key);
                     var month = dateObj.getUTCMonth() + 1; //months from 1-12
                     var day = dateObj.getUTCDate();
                     var year = dateObj.getUTCFullYear();
                     var newdate = year + "-" + month + "-" + day;
                     $scope.keys.push(newdate)
                        // $scope.RevenueArray.push(dataReqtemp.revenue);
                        //    $scope.RevenueArray.push(dataReqtemp.sales);

                              // $scope.RevenueArray.date.push(key);
                                // i++;
                    //  $scope.PackagesData=$scope.AdvertiserData.concat(dataReq);
               }
               console.log( $scope.RevenueArray);
               console.log( $scope.keys);

               for(var i=0; i<$scope.keys.length; i++)  {
                    $scope.final.push({amount: $scope.RevenueArray[i].amount,id:i,revenue: $scope.RevenueArray[i].revenue,sales: $scope.RevenueArray[i].sales, date: $scope.keys[i]});
                }
                console.log($scope.final);
                $scope.smartTableData=$scope.final;
                $scope.final1=$scope.final;


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
    }
  /** @ngInject */


})();
