/* global angular */

(function () {
  'use strict'

  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl ($scope, $location, $cookies, AuthService, $log, flashMessageService) {
    $scope.credentials = {
      username: '',
      password: ''
    }
    $scope.login = function (credentials) {
      AuthService.login(credentials)
        .then(res => {
          $cookies.put('loggedInUser', res.data)
          $location.path('/pages')
        })
        .catch(err => {
          flashMessageService.setMessage(err.data)
          $log.log(err)
        })
    }
  }

  LoginCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthService', '$log', 'flashMessageService']
})()
