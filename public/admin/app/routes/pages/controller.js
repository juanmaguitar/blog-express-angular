/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AdminPagesCtrl', AdminPagesCtrl)

  AdminPagesCtrl.$inject = ['$scope', '$log', 'pagesFactory']

  function AdminPagesCtrl ($scope, $log, pagesFactory) {
    pagesFactory.getPages()
    .then(pages => {
      $scope.allPages = pages
    })
    .catch(err => $log.error(err))

    $scope.deletePage = function (id) {
      pagesFactory.deletePage(id)
    }
  }
})()
