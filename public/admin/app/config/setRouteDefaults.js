(function () {
  'use strict'

  angular.module('myApp').config(setRouteDefaults)

  function setRouteDefaults ($locationProvider, $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'})
    // $locationProvider.html5Mode(true)
  }

  setRouteDefaults.$inject = ['$locationProvider', '$routeProvider']
})()
