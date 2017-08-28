/* global angular */
'use strict'

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
  .controller('AdminLoginCtrl', ['$scope', '$location', '$cookies', 'AuthService', '$log', 'flashMessageService',
    function ($scope, $location, $cookies, AuthService, $log, flashMessageService) {
      console.log($cookies.get('loggedInUser'))
      $scope.credentials = {
        username: '',
        password: ''
      }
      $scope.login = function (credentials) {
        AuthService.login(credentials)
          .then(res => {
            $cookies.put('loggedInUser', res.data)
            console.log($cookies)
            $location.path('/admin/pages')
          })
          .catch(err => {
            flashMessageService.setMessage(err.data)
            $log.log(err)
          })
      }
    }
  ])
  .controller('AddEditPageCtrl', [
    '$scope',
    '$log',
    'pagesFactory',
    '$routeParams',
    '$location',
    'flashMessageService',
    '$filter',
    function ($scope, $log, pagesFactory, $routeParams, $location, flashMessageService, $filter) {
      $scope.pageContent = {}
      $scope.pageContent._id = $routeParams.id
      $scope.heading = 'Add a New Page'

      if ($scope.pageContent._id !== 0) {
        $scope.heading = 'Update Page'
        pagesFactory.getAdminPageContent($scope.pageContent._id).then(
                function (response) {
                  $scope.pageContent = response.data
                  $log.info($scope.pageContent)
                },
                function (err) {
                  $log.error(err)
                })
      }

      $scope.updateURL = function () {
        $scope.pageContent.url = $filter('formatURL')($scope.pageContent.title)
      }

      $scope.savePage = function () {
        pagesFactory.savePage($scope.pageContent).then(
              function () {
                flashMessageService.setMessage('Page Saved Successfully')
                $location.path('/admin/pages')
              },
              function () {
                $log.error('error saving data')
              }
            )
      }
    }
  ])
  .controller('AppCtrl', ['$scope', 'AuthService', 'flashMessageService', '$location', function ($scope, AuthService, flashMessageService, $location) {
    $scope.site = {
      logo: '/admin/img/angcms-logo.png',
      footer: 'Copyright 2014 Angular CMS'
    }
    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          $location.path('/admin/login')
          flashMessageService.setMessage('Successfully logged out')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }
  ])
  .controller('PageCtrl', [ '$scope', 'pagesFactory', '$routeParams ', function ($scope, pagesFactory, $routeParams) {
    var url = $routeParams.url
    pagesFactory.getPageContent(url).then(
      function (response) {
        $scope.pageContent = response.data
      }, function () {
      console.log('error fetching data')
    })
  }])
