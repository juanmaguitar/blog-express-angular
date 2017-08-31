/* global angular */

(function () {
  'use strict'

  angular.module('myApp.services')
    .factory('StorageService', StorageService)

  StorageService.$inject = ['$window']

  function StorageService ($window) {
    const key = 'auth-token'

    function getToken () {
      return $window.localStorage.getItem(key)
    }

    function setToken (token) {
      $window.localStorage.setItem(key, token)
    }

    function removeToken () {
      return $window.localStorage.removeItem(key)
    }

    return { setToken, getToken, removeToken }
  }
})()
