/* global angular */
'use strict'

angular.module('myApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/admin/app/routes/login/template.html',
        controller: 'LoginCtrl'
      })
  }])
