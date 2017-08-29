/* global angular */
'use strict'

angular.module('myApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/add-edit-page/:id', {
        templateUrl: '/admin/app/routes/add-edit-page/template.html',
        controller: 'AddEditPageCtrl'
      })
  }])
