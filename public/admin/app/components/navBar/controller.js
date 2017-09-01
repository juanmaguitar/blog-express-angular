/* global angular */

(function () {
  'use strict'

  angular.module('myApp.components')
    .controller('NavBarCtrl', NavBarCtrl)

  function NavBarCtrl ($scope, AuthService, $location, FlashMessageService) {
    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          FlashMessageService.setMessage('Successfully logged out')
          $location.path('/login')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }

  NavBarCtrl.$inject = ['$scope', 'AuthService', '$location', 'FlashMessageService']
})()
