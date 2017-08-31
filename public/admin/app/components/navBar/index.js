/* global angular */
'use strict'

angular.module('myApp.components')
  .component('navBar', {
    bindings: {
      loggedUser: '='
    },
    controller: 'NavBarCtrl',
    templateUrl: '/admin/app/components/navBar/template.html'
  })
