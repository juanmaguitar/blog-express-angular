/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AddEditPageCtrl', AddEditPageCtrl)

  AddEditPageCtrl.$inject = ['$scope', '$rootScope', '$log', 'ApiService', '$routeParams', '$location', 'FlashMessageService', '$filter', 'AuthService']

  function AddEditPageCtrl ($scope, $rootScope, $log, ApiService, $routeParams, $location, FlashMessageService, $filter, AuthService) {
    const id = $routeParams.id
    $scope.authorUsername = $rootScope.loggedUser
    const author = $rootScope.loggedUserId
    $scope.pageContent = { id, author }
    $scope.heading = 'Add a New Page'
    $scope.mode = (id === '0') ? 'add' : 'edit'

    if (id !== '0') {
      $scope.heading = 'Update Page'
      ApiService.getDetailsPage(id)
        .then(detailsPage => {
          Object.assign($scope.pageContent, detailsPage)
          $log.info($scope.pageContent)
        })
        .catch(err => $log.error(err))
    }

    $scope.updateURL = function () {
      $scope.pageContent.url = $filter('formatURL')($scope.pageContent.title)
    }

    $scope.savePage = function () {
      ApiService
        .savePage($scope.pageContent)
        .then(() => {
          FlashMessageService.setMessage('Page Saved Successfully')
          $location.path('/pages')
        })
        .catch(() => $log.error('error saving data'))
    }
  }
})()
