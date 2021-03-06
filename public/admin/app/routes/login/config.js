(function () {
  'use strict'

  angular.module('myApp').config(configRoute)

  function configRoute ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/admin/app/routes/login/template.html',
        controller: 'LoginCtrl'
      })
  }

  configRoute.$inject = ['$routeProvider']
})()
