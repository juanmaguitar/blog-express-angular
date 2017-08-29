/* global angular */

(function () {
  'use strict'

  angular.module('myApp')
    .controller('NavBarCtrl', NavBarCtrl)

  NavBarCtrl.$inject = ['$scope', 'pagesFactory', '$location']

  function NavBarCtrl ($scope, pagesFactory, $location) {
    var path = $location.path().substr(0, 6)
    if (path === '/admin') {
      $scope.navLinks = [
        { title: 'Pages', url: 'admin' },
        { title: 'Site Settings', url: 'admin/site-settings' }
      ]
    } else {
      pagesFactory.getPages()
        .then(response => {
          $scope.navLinks = response.data
        })
    }
  }
})()
