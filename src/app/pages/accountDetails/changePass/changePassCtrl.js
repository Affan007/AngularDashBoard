/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .controller('changePassCtrl',changePassCtrl);

  /** @ngInject */
  function changePassCtrl($scope,User,$location,toastr) {
    $scope.UpdatePassword=function(){
    var userdata={
        'oldPassword':$scope.pass.oldPass,
        'password':$scope.pass.password
    };

    // var userdata=$scope.pass;
    User.UpdatePassword(userdata)
        .success(function(data) {
          // console.log(data);
          $scope.MyInfo=data.user;
          $location.path('/accDetails');
           toastr.success('Password Changed successfully!');
        })
        .error(function(data) {
            console.log(data)
              $location.path('/accDetails');
                 toastr.error('Something is wrong Try again', 'Error');
        })
        }

  }
})();
