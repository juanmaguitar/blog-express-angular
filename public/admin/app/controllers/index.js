/* global angular */
'use strict'

angular.module('myApp.controllers', [])
  .controller('AppCtrl', ['$scope', 'AuthService', 'flashMessageService', '$location', function ($scope, AuthService, flashMessageService, $location) {
    $scope.site = {
      logo: '',
      footer: 'Copyright 2014 Angular CMS'
    }
    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          $location.path('/admin/login')
          flashMessageService.setMessage('Successfully logged out')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }
  ])
