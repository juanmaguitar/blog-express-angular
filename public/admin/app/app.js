/* global angular, hljs */
'use strict'

// Declare app level module which depends on filters, and services
angular.module('myApp',
  [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.components',
    'ngSanitize',
    'hc.marked', 'hljs', 'angular-markdown-editor',
    'ngCookies'
  ])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  }])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      // $locationProvider.html5Mode(true)

      $routeProvider
        .otherwise({
          redirectTo: '/login'
        })
    }
  ])
  .config(['markedProvider', 'hljsServiceProvider', function (markedProvider, hljsServiceProvider) {
     // marked config
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      sanitize: true,
      highlight: function (code, lang) {
        if (lang) {
          return hljs.highlight(lang, code, true).value
        } else {
          return hljs.highlightAuto(code).value
        }
      }
    })

     // highlight config
    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: '    '
    })
  }])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise('/login')
  })
  .run(function ($rootScope, $location, StorageService, AuthService) {
    if (AuthService.isLoggedIn()) {
      const token = StorageService.getToken()
      AuthService.setCredentials(token)
    }

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      console.log('route has changed')
      if (next && next.secure) {
        console.log('this route is secured!!')
        if (!AuthService.isLoggedIn()) {
          $location.path('/login')
        }
      }
    })
  })
