/* global angular */
'use strict'

angular.module('myApp')
  .controller('AdminPagesCtrl',
  [
    '$scope',
    '$log',
    'pagesFactory',
    function ($scope, $log, pagesFactory) {
      pagesFactory.getPages()
        .then(pages => {
          $scope.allPages = pages
        })
        .catch(err => $log.error(err))

      $scope.deletePage = function (id) {
        pagesFactory.deletePage(id)
      }
    }
  ])
