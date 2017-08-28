/* global angular */

'use strict'

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/view1', {
      templateUrl: '/admin/partials/partial1.html',
      controller: 'MyCtrl1'
    })
    .when('/view2', {
      templateUrl: '/admin/partials/partial2.html',
      controller: 'MyCtrl2'
    })
    .otherwise({
      redirectTo: '/view1'
    })
}])
.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.when('/admin/login', {
      templateUrl: '/admin/partials/admin/login.html',
      controller: 'AdminLoginCtrl'
    })
    $routeProvider.when('/admin/pages', {
      templateUrl: '/admin/partials/admin/pages.html',
      controller: 'AdminPagesCtrl'
    })
    $routeProvider.when('/admin/add-edit-page/:id', {
      templateUrl: '/admin/partials/admin/add-edit-page.html',
      controller: 'AddEditPageCtrl'
    })
    $routeProvider.otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(true)
  }
])
