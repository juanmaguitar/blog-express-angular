/* global angular */

(function () {
  'use strict'

  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl ($scope, $location, $cookies, AuthService, $log, flashMessageService) {
    const loggedUser = AuthService.loggedUser.get()
    if (loggedUser) $location.path('/pages')

    $scope.credentials = {
      username: '',
      password: ''
    }

    $scope.login = function (credentials) {
      console.log('login!')
      AuthService.login(credentials)
        .then(() => $location.path('/pages'))
        .catch(err => {
          flashMessageService.setMessage(err.data)
          $log.log(err)
        })
    }
  }

  LoginCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthService', '$log', 'flashMessageService']
})()
