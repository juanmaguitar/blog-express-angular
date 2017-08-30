/* global angular */

(function () {
  'use strict'

  angular.module('myApp.components')
    .controller('NavBarCtrl', NavBarCtrl)

  NavBarCtrl.$inject = ['$scope', '$cookies', 'AuthService', '$location', 'flashMessageService']

  function NavBarCtrl ($scope, $cookies, AuthService, $location, flashMessageService) {
    $scope.loggedUser = () => AuthService.loggedUser.getUsername()
    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          flashMessageService.setMessage('Successfully logged out')
          $location.path('/login')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }
})()
