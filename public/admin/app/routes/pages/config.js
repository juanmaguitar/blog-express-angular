/* global angular */
'use strict'

angular.module('myApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/pages', {
        templateUrl: '/admin/app/routes/pages/template.html',
        controller: 'AdminPagesCtrl'
      })
  }])
