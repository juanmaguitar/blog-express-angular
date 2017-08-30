/* global angular */

(function () {
  'use strict'

  angular.module('myApp.services')
    .factory('AuthService', AuthService)

  AuthService.$inject = ['$rootScope', '$http', '$cookies']

  function AuthService ($rootScope, $http, $cookies) {
    const loggedUser = (function () {
      let loggedInUser = $cookies.get('loggedInUser')
      return {
        get: () => loggedInUser,
        clear: () => { loggedInUser = null },
        add: (user) => { loggedInUser = user }
      }
    })()

    function login (credentials) {
      return $http.post('/api/login', credentials)
                .then(res => res.data)
                .then(loggedInUser => {
                  loggedUser.add(loggedInUser)
                  $cookies.put('loggedInUser', loggedInUser)
                })
    }

    function logout () {
      return $http.get('/api/logout')
                .then(() => {
                  loggedUser.clear()
                  $cookies.remove('loggedInUser')
                })
    }

    return { login, logout, loggedUser }
  }
})()
