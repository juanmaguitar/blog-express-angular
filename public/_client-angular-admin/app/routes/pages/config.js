/* global angular */
'use strict'

angular.module('myApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/admin/pages', {
        templateUrl: '/admin/routes/pages/template.html',
        controller: 'AdminPagesCtrl'
      })
  }])