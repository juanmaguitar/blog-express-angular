(function () {
  'use strict'

  angular.module('myApp').config(configRoute)

  function configRoute ($routeProvider) {
    $routeProvider
      .when('/add-edit-post/:id', {
        templateUrl: '/admin/app/routes/add-edit-post/template.html',
        controller: 'AddEditPostCtrl',
        secure: true
      })
  }

  configRoute.$inject = ['$routeProvider']
})()
