/* global angular */

(function () {
  'use strict'

  angular.module('myApp').controller('AdminPagesCtrl', AdminPagesCtrl)

  AdminPagesCtrl.$inject = ['$scope', '$log', 'ApiService', 'AuthService', '$location', '$route']

  function AdminPagesCtrl ($scope, $log, ApiService, AuthService, $location, $route) {
    // const loggedUser = AuthService.loggedUser.getUsername()
    // if (!loggedUser) $location.path('/login')

    ApiService.getPages()
      .then(pages => { $scope.allPages = pages })
      .catch(err => $log.error(err))

    $scope.deletePage = function (e, id) {
      e.preventDefault()
      ApiService.deletePage(id)
        .then(() => {
          console.log('item deleted')
          $route.reload()
        })
    }
  }
})()
