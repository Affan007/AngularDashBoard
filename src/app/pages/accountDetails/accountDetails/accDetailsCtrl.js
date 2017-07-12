/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .controller('accDetailsCtrl', accDetailsCtrl);

  /** @ngInject */
  function accDetailsCtrl($scope,User) {

    // $scope.UserInfo= function() {

        User.UserInfo()
            .success(function(data) {
              console.log(data);
              $scope.MyInfo=data.user;
            })
            .error(function(data) {
                console.log(data)
            })
    // }

  }
})();
