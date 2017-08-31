/* global angular */

(function () {
  'use strict'

  angular.module('myApp.services')
    .factory('AuthService', AuthService)

  AuthService.$inject = ['$rootScope', '$http', '$cookies']

  function AuthService ($rootScope, $http, $cookies) {
    // const loggedUser = (function () {
    //   const cookieLoggedUser = $cookies.get('loggedInUser')
    //   let loggedInUser = cookieLoggedUser && JSON.parse(cookieLoggedUser)
    //   return {
    //     getUsername: () => loggedInUser && loggedInUser.username,
    //     getId: () => loggedInUser && loggedInUser.id,
    //     clear: () => { loggedInUser = null },
    //     add: (user) => { loggedInUser = user }
    //   }
    // })()

    function login (credentials) {
      return $http.post('/admin/login', credentials)
                .then(res => res.data)
                .then(loggedInUser => {
                  console.log(loggedInUser)
                  // loggedUser.add( loggedInUser )
                  // $cookies.put('loggedInUser', JSON.stringify(loggedInUser) )
                })
    }

    function logout () {
      return $http.get('/api/logout')
                .then(() => {
                  // loggedUser.clear()
                  $cookies.remove('loggedInUser')
                })
    }

    return { login, logout }
  }
})()
