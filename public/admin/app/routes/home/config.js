(function () {
  'use strict'

  angular.module('myApp').config(configRoute)

  function configRoute ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/admin/app/routes/home/template.html',
        controller: 'HomeCtrl',
        secure: true
      })
  }

  configRoute.$inject = ['$routeProvider']
})()
