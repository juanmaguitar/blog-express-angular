/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AddEditPageCtrl', AddEditPageCtrl)

  AddEditPageCtrl.$inject = ['$scope', '$log', 'pagesFactory', '$routeParams', '$location', 'flashMessageService', '$filter']

  function AddEditPageCtrl ($scope, $log, pagesFactory, $routeParams, $location, flashMessageService, $filter) {
    const id = +$routeParams.id
    $scope.heading = 'Add a New Page'
    $scope.mode = (id === 0) ? 'add' : 'edit'

    if (id !== 0) {
      $scope.heading = 'Update Page'
      pagesFactory.getDetailsPage(id)
        .then(detailsPage => {
          $scope.pageContent = detailsPage
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
