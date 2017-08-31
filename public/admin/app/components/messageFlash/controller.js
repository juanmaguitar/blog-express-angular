/* global angular */

(function () {
  'use strict'

  angular.module('myApp.components')
    .controller('MessageFlashCtrl', MessageFlashCtrl)

  function MessageFlashCtrl ($scope, FlashMessageService, $timeout) {
    $scope.$on('NEW_MESSAGE', function () {
      $scope.message = FlashMessageService.getMessage()
      $scope.isVisible = true
      return $timeout(() => {
        $scope.isVisible = false
        $scope.message = ''
      }, 2500)
    })
  }

  MessageFlashCtrl.$inject = ['$scope', 'FlashMessageService', '$timeout']
})()
