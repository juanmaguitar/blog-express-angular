/* global angular */

(function () {
  'use strict'

  angular.module('myApp')
    .controller('MessageFlashCtrl', MessageFlashCtrl)

  function MessageFlashCtrl ($scope, flashMessageService, $timeout) {
    $scope.$on('NEW_MESSAGE', function () {
      $scope.message = flashMessageService.getMessage()
      $scope.isVisible = true
      return $timeout(() => {
        $scope.isVisible = false
        $scope.message = ''
      }, 2500)
    })
  }

  MessageFlashCtrl.$inject = ['$scope', 'flashMessageService', '$timeout']

})()
