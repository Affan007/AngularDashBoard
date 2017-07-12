/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.box')
      .controller('boxCtrl', boxCtrl);
  function boxCtrl($scope, $state, $window, $timeout,User,$document,$uibModal,toastr) {
    console.log("hi");
    $scope.addbox={};


    $scope.standardItem = {};
    $scope.standardSelectItems = [
      {label: 'Active', value: 'active'},
      {label: 'In-Active', value:'In-Active'}
    ];

    $scope.commisionSelectItems = [
      {label: 'Persentage', value: 'Persentage'},
      {label: 'Fixed', value:'Fixed'}
    ];
    $scope.selectedcommision=$scope.commisionSelectItems[0];
    $scope.smartTablePageSize = 10;

    $scope.editTodo = function(todo){
        todo.editing=true;
    }
    $scope.editTodo1 = function(todo){
        todo.editing1=true;
    }
    $scope.editTodo2 = function(todo){
        todo.editing2=true;
    }
    $scope.editTodo3 = function(todo){
        todo.editing3=true;
    }
    // $scope.switch1value=1;


    $scope.doneEditing = function(todo){
        todo.editing=false;
        todo.editing1=false;
        todo.editing2=false;
        todo.editing3=false;

        console.log(todo);
        var username={
          kuUsername: todo.kuUsername,
          kuPassword: todo.kuPassword,
          title:todo.title,
          mac: todo.mac,
          isEnabled:todo.isEnabled.toString(),
          kodiEnabled:todo.kodiEnabled.toString(),
          settingsEnabled:todo.settingsEnabled.toString(),
          _id:todo._id
        }
        User.boxUpdate(username)
            .success(function(data) {

              //  $scope.KuBoxDetails=data.boxs;
              //  $scope.kuBackup=data.boxs;
               console.log( $scope.KuBoxDetails);
               toastr.success('KUBox Updated successfully!');
            })
            .error(function(data) {
                console.log(data)
                  toastr.error(data, 'Error');
            })

    }

    $scope.boxAdd = function() {
        var userdata={
          'title': $scope.$parent.addbox.title,
          'mac': $scope.$parent.addbox.mac,
          'kuUsername':$scope.$parent.addbox.kuUsername,
          'kuPassword':$scope.$parent.addbox.kuPassword
        };


        User.boxAdd(userdata)
            .success(function(data) {

               $scope.KuBoxDetails=data.boxs;
               $scope.kuBackup=data.boxs;
               console.log( $scope.KuBoxDetails);

                 toastr.success('KUBox added successfully!');
                  $scope.$dismiss();
            })
            .error(function(data) {
                console.log(data)
                  toastr.error(data, 'Error');
                   $scope.$dismiss();
            })
    }

    $scope.boxclear=function(){
    $scope.addbox='';
    }

    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        controller: 'boxCtrl',
        scope:$scope,
        // resolve: {
        //   items: function () {
        //     return $scope.items;
        //   }
        // }
      });
    };



    $scope.boxDetails = function() {
        // var userdata={
        //   'username': $scope.UserName,
        //   'password': $scope.Password
        //
        // };

        $scope.ResselrsArray=[]
        $scope.packages1=[]

        User.boxDetails()
            .success(function(data) {

               $scope.KuBoxDetails=data.boxs;
               $scope.kuBackup=data.boxs;
               console.log( $scope.KuBoxDetails);


              //  for(var keyName in data.sales) {
              //      var key = keyName;
               //
               //
               //
              //      var dataReqtemp = data.sales[key]
               //
              //     //  var dataReqtemp2 = dataReqtemp[dataReqtemp.length - 1];
              //      console.log(dataReqtemp.agent_name)
              //        $scope.ResselrsArray.push(dataReqtemp.agent_name);
               //
               //
              //       //  $scope.PackagesData=$scope.AdvertiserData.concat(dataReq);
               //
              //  }
              //  console.log( $scope.ResselrsArray);

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

      $scope.$watch('KuBoxDetails', function() {
        console.log($scope.KuBoxDetails)
    });
    $scope.$watch('kuBackup', function() {
      console.log($scope.kuBackup)
  });

    }
  /** @ngInject */


})();
