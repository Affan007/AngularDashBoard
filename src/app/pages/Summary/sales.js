/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.summary')
      .controller('salesCtrl', salesCtrl);
  function salesCtrl($scope, $filter, editableOptions, editableThemes,User) {

    $scope.smartTablePageSize = 10;
    //Starting payments module

    $scope.tConvert=function (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string

    }
    $scope.month = new Array();
    $scope.month[0] = "Jan";
    $scope.month[1] = "Feb";
    $scope.month[2] = "Mar";
    $scope.month[3] = "Apr";
    $scope.month[4] = "May";
    $scope.month[5] = "Jun";
    $scope.month[6] = "Jul";
    $scope.month[7] = "Aug";
    $scope.month[8] = "Sep";
    $scope.month[9] = "Oct";
    $scope.month[10] = "Nov";
    $scope.month[11] = "Dec";



        var  i=0;
        $scope.Payments= function() {


            $scope.ResselrsArray=[]
            $scope.packages1=[]
            // $scope.smartTableData=[] ;
            var username={
              skip:0,        // Number of records you want to skip
              number: 1000
        //    query: String   (optional)    // Search query string
        //    startDate: Date (optional)
        //    endDate: Date   (optional)
            }
            User.TotalSale(username)
                .success(function(data) {
                   console.log(data)
                   var dataReq=data.sales
                   $scope.dataReq=dataReq
                   $scope.dataReq1= $scope.dataReq
                  //  $scope.myData=$scope.myData.concat(dataReq);
                   dataReq.forEach(function(dataReq){
                     $scope.paymentDate= new Date(dataReq.createdAt);
                     var paymentDate = $scope.month[$scope.paymentDate.getMonth()]+' '+ $scope.paymentDate.getDate()+' '+ $scope.paymentDate.getFullYear() ;

                     dataReq.paymentDate= paymentDate;
                       dataReq.User_V = i;
                       i++;
        })
        $scope.paymentTableData=data.payments;
        // angular.copy(data.sales,$scope.smartTableData)
        console.log($scope.paymentTableData);

                })
                .error(function(data) {
                    console.log(data)
                })
        }


      //End payments module





    $scope.charts = [{

      description: 'New Visits',
      stats: '57,820',
      icon: 'person',
    }, {

      description: 'Purchases',
      stats: '$ 89,745',
      icon: 'money',
    },{

      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    }
    ];

    $scope.stats={
      Commission: 239,
      Payments: 339,
      Balance: 100
    }

  /** @ngInject */
}

})();
