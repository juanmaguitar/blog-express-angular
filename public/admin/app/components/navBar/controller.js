/* global angular */

(function () {
  'use strict'

  angular.module('myApp.components')
    .controller('NavBarCtrl', NavBarCtrl)

  NavBarCtrl.$inject = ['$scope', '$cookies', 'AuthService', '$location', 'flashMessageService']

  function NavBarCtrl ($scope, $cookies, AuthService, $location, flashMessageService) {
    $scope.loggedInUser = $cookies.get('loggedInUser')
    $scope.logout = function () {
      console.log("logout...")
      AuthService.logout()
        .then(function () {
          $location.path('/admin/login')
          flashMessageService.setMessage('Successfully logged out')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }
})()
