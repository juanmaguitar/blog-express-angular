/* global angular */

(function () {
  'use strict'

  angular.module('myApp.components')
    .controller('NavBarCtrl', NavBarCtrl)

  NavBarCtrl.$inject = ['$scope', '$cookies', 'AuthService', '$location', 'FlashMessageService']

  function NavBarCtrl ($scope, $cookies, AuthService, $location, FlashMessageService) {
    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          FlashMessageService.setMessage('Successfully logged out')
          $location.path('/login')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }
})()
