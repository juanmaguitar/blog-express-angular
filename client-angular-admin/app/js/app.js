/* global angular */
'use strict'

// Declare app level module which depends on filters, and services
angular.module('myApp',
  [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.tinymce',
    'ngCookies',
    'message.flash'
  ])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor')
  })
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true)

      $routeProvider
        .when('/admin/login', {
          templateUrl: '/admin/partials/admin/login.html',
          controller: 'AdminLoginCtrl'
        })
        .when('/admin/pages', {
          templateUrl: '/admin/partials/admin/pages.html',
          controller: 'AdminPagesCtrl'
        })
        .when('/admin/add-edit-page/:id', {
          templateUrl: '/admin/partials/admin/add-edit-page.html',
          controller: 'AddEditPageCtrl'
        })
        .when('/:url', {
          templateUrl: 'partials/page.html',
          controller: 'PageCtrl'
        })
        .otherwise({
          redirectTo: '/'
        })
    }
  ])
