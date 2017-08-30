/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AdminPagesCtrl', AdminPagesCtrl)

  AdminPagesCtrl.$inject = ['$scope', '$log', 'pagesFactory', 'AuthService', '$location', '$route']

  function AdminPagesCtrl ($scope, $log, pagesFactory, AuthService, $location, $route) {

    const loggedUser = AuthService.loggedUser.get()
    if (!loggedUser) $location.path('/login')

    pagesFactory.getPages()
      .then(pages => { $scope.allPages = pages })
      .catch(err => $log.error(err))

    $scope.deletePage = function (e, id) {
      e.preventDefault()
      pagesFactory.deletePage(id)
        .then(() => {
          console.log('item deleted')
          $route.reload();
        })
    }
  }
})()
