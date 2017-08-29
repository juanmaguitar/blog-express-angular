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
        .otherwise({
          redirectTo: '/'
        })
    }
  ])
