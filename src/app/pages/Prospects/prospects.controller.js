/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.prospects')
      .controller('prospectsCtrl', prospectsCtrl);
  function prospectsCtrl($scope, $state, $window, $timeout,User) {
    console.log("hi");
    $scope.standardItem = {};
    $scope.HowHear = [
      {label: 'TV Ads', value: 'TV Ads'},
      {label: 'News Paper Ads', value:'News Paper Ads'},
      {label: 'Flyer', value:'Flyer'},
      {label: 'Radio', value:'Radio'},
      {label: 'Referrals', value:'Referrals'},
      {label: 'Google', value:'Google'},
      {label: 'Other', value:'Other'}
    ];

    $scope.commisionSelectItems = [
      {label: 'Persentage', value: 'Persentage'},
      {label: 'Fixed', value:'Fixed'}
    ];
    // $scope.selectedcommision=$scope.commisionSelectItems[0];
    $scope.smartTablePageSize = 10;

    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }

    //Starting Prospects module

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
        $scope.prospectSummary= function() {
            $scope.ResselrsArray=[]
            $scope.packages1=[]
            // $scope.smartTableData=[] ;
            User.prospectSummary()
                .success(function(data) {
                   console.log(data)
                   var dataReq=data.users
                   $scope.dataReq=data.users
                  //  $scope.myData=$scope.myData.concat(dataReq);
                   dataReq.forEach(function(dataReq){
                     $scope.date= new Date(dataReq.date);
                     $scope.expdate=new Date(dataReq.expiry);
                     //console.log($scope.date);
                     var date = $scope.month[$scope.date.getMonth()]+' '+ $scope.date.getDate()+' '+ $scope.date.getFullYear() ;

                     $scope.time0= $scope.date.getHours()+":"+($scope.date.getMinutes()<10?'0':'')+ $scope.date.getMinutes();
                     $scope.time1=$scope.tConvert($scope.time0)

                     dataReq.date= date +' '+$scope.time1;
                       dataReq.User_V = i;
                       i++;

        })
        $scope.smartTableData=data.users;
        // angular.copy(data.sales,$scope.smartTableData)
        console.log($scope.smartTableData);

                })
                .error(function(data) {
                    console.log(data)
                })
        }


      //End prospects module






    }
  /** @ngInject */


})();
