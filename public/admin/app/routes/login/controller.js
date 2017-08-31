/* global angular */

(function () {
  'use strict'

  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl ($scope, $rootScope, $location, $cookies, AuthService, $log, FlashMessageService) {
    if ($rootScope.loggedUser) $location.path('/pages')

    $scope.credentials = {
      username: '',
      password: ''
    }

    $scope.login = function (credentials) {
      AuthService.login(credentials)
        .then(res => {
          $location.path('/pages')
        })
        .catch(err => {
          FlashMessageService.setMessage(err.data)
          $log.log(err)
        })
    }
  }

  LoginCtrl.$inject = ['$scope', '$rootScope', '$location', '$cookies', 'AuthService', '$log', 'FlashMessageService']
})()
