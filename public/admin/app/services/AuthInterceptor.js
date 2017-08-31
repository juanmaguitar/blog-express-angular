/* global angular */

(function () {
  'use strict'

  angular.module('myApp.services')
    .factory('AuthInterceptor', AuthInterceptor)

  AuthInterceptor.$inject = ['StorageService']

  function AuthInterceptor (StorageService) {
    function addToken (config) {
      const token = StorageService.getToken()
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = 'JWT ' + token
      }
      return config
    }

    return {
      request: addToken
    }
  }
})()
