/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AdminPagesCtrl', AdminPagesCtrl)

  AdminPagesCtrl.$inject = ['$scope', '$log', 'pagesFactory', 'AuthService', '$location']

  function AdminPagesCtrl ($scope, $log, pagesFactory, AuthService, $location) {

    const loggedUser = AuthService.loggedUser.get()
    if (!loggedUser) $location.path('/login')

    pagesFactory.getPages()
      .then(pages => { $scope.allPages = pages })
      .catch(err => $log.error(err))

    $scope.deletePage = function (id) {
      pagesFactory.deletePage(id)
        .then(() => $location.path('/pages'))
    }
  }
})()
