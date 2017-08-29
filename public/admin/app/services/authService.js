/* global angular */
'use strict'

angular.module('myApp.services')
  .factory('AuthService', ['$http', function ($http) {
    function login (credentials) {
      return $http.post('/api/login', credentials)
    }

    function logout () {
      return $http.get('/api/logout')
    }

    return { login, logout }
  }])
