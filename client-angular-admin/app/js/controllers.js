/* global angular */
'use strict'

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AdminPagesCtrl', ['$scope', '$log', 'pagesFactory',
    function ($scope, $log, pagesFactory) {
      pagesFactory.getPages()
        .then(pages => {
          $scope.allPages = pages
        })
        .catch(err => $log.error(err))

      $scope.deletePage = function (id) {
        pagesFactory.deletePage(id)
      }
    }
  ])
  .controller('AdminLoginCtrl', ['$scope', '$location', '$cookies', 'AuthService', '$log',
    function ($scope, $location, $cookies, AuthService, $log) {
      $scope.credentials = {
        username: '',
        password: ''
      }
      $scope.login = function (credentials) {
        AuthService.login(credentials)
          .then(res => {
            $cookies.loggedInUser = res.data
            $location.path('/admin/pages')
          })
          .catch(err => {
            $log.log(err)
          })
      }
    }
  ])
