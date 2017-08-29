/* global angular */
'use strict'

angular.module('myApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/admin/add-edit-page/:id', {
        templateUrl: '/admin/routes/add-edit-page/template.html',
        controller: 'AddEditPageCtrl'
      })
  }])
