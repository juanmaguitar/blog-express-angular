/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AddEditPageCtrl', AddEditPageCtrl)

  AddEditPageCtrl.$inject = ['$scope', '$log', 'pagesFactory', '$routeParams', '$location', 'flashMessageService', '$filter']

  function AddEditPageCtrl ($scope, $log, pagesFactory, $routeParams, $location, flashMessageService, $filter) {
    $scope.pageContent = {}
    $scope.pageContent._id = $routeParams.id
    $scope.heading = 'Add a New Page'

    if ($scope.pageContent._id !== 0) {
      $scope.heading = 'Update Page'
      pagesFactory.getAdminPageContent($scope.pageContent._id).then(
              function (response) {
                $scope.pageContent = response.data
                $log.info($scope.pageContent)
              },
              function (err) {
                $log.error(err)
              })
    }

    $scope.updateURL = function () {
      $scope.pageContent.url = $filter('formatURL')($scope.pageContent.title)
    }

    $scope.savePage = function () {
      pagesFactory.savePage($scope.pageContent).then(
            function () {
              flashMessageService.setMessage('Page Saved Successfully')
              $location.path('/admin/pages')
            },
            function () {
              $log.error('error saving data')
            }
          )
    }
  }

})()
