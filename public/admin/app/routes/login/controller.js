/* global angular */

(function () {
  'use strict'

  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl ($scope, $rootScope, $location, $cookies, AuthService, $log, flashMessageService) {
    if ($rootScope.loggedUser) $location.path('/pages')

    $scope.credentials = {
      username: '',
      password: ''
    }

    $scope.login = function (credentials) {
//      console.log('login!')
      AuthService.login(credentials)
        .then(res => {
          console.log(res)
          // if (response.status === 401) {
          // $location.path('/pages')
        })
        .catch(err => {
          flashMessageService.setMessage(err.data)
          $log.log(err)
        })
    }
  }

  LoginCtrl.$inject = ['$scope', '$rootScope', '$location', '$cookies', 'AuthService', '$log', 'flashMessageService']
})()
