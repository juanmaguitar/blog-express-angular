/* global angular */
'use strict'

angular.module('myApp.components', [])
  .component('messageFlash', {
    controller: 'MessageFlashCtrl',
    templateUrl: '/admin/components/messageFlash/template.html'
  })





  .directive('adminLogin', [
    function () {
      return {
        controller: function ($scope, $cookies) {
          $scope.loggedInUser = $cookies.get('loggedInUser')
        },
        templateUrl: 'partials/directives/admin-login.html'
      }
    }
  ])
