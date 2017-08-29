/* global angular */

(function () {
  'use strict'

  angular.module('myApp')
    .controller('AdminLoginCtrl', AdminLoginCtrl)

  AdminLoginCtrl.$inject = ['$scope', '$cookies']

  function AdminLoginCtrl ($scope, $cookies) {
    $scope.loggedInUser = $cookies.get('loggedInUser')
  }
})()
