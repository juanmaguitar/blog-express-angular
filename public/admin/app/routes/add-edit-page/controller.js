/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AddEditPageCtrl', AddEditPageCtrl)

  AddEditPageCtrl.$inject = ['$scope', '$log', 'pagesFactory', '$routeParams', '$location', 'flashMessageService', '$filter', 'AuthService']

  function AddEditPageCtrl ($scope, $log, pagesFactory, $routeParams, $location, flashMessageService, $filter, AuthService) {
    const id = $routeParams.id
    $scope.authorUsername = AuthService.loggedUser.getUsername()
    const author = AuthService.loggedUser.getId()
    $scope.pageContent = { id, author }
    $scope.heading = 'Add a New Page'
    $scope.mode = (id === '0') ? 'add' : 'edit'

    if (id !== '0') {
      $scope.heading = 'Update Page'
      pagesFactory.getDetailsPage(id)
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
      pagesFactory
        .savePage($scope.pageContent)
        .then(() => {
          flashMessageService.setMessage('Page Saved Successfully')
          $location.path('/pages')
        })
        .catch(() => $log.error('error saving data'))
    }
  }
})()
