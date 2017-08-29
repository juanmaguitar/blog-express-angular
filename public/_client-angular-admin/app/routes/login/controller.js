/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AdminLoginCtrl', AdminLoginCtrl)

  AdminLoginCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthService', '$log', 'flashMessageService']

  function AdminLoginCtrl ($scope, $location, $cookies, AuthService, $log, flashMessageService) {
    $scope.credentials = {
      username: '',
      password: ''
    }
    $scope.login = function (credentials) {
      AuthService.login(credentials)
        .then(res => {
          $cookies.put('loggedInUser', res.data)
          $location.path('/admin/pages')
        })
        .catch(err => {
          flashMessageService.setMessage(err.data)
          $log.log(err)
        })
    }
  }
})()
