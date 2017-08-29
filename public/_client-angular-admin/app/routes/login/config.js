/* global angular */
'use strict'

angular.module('myApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/admin/routes/login/template.html',
        controller: 'AdminLoginCtrl'
      })
  }])
