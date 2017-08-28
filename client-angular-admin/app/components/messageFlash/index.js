/* global angular */
'use strict'

angular.module('myApp.components', [])
  .component('messageFlash', {
    controller: aaa ,
    templates: template

  }[function () {
    return {
      controller: function ($scope, flashMessageService, $timeout) {
        $scope.$on('NEW_MESSAGE', function () {
          $scope.message = flashMessageService.getMessage()
          $scope.isVisible = true
          return $timeout(function () {
            $scope.isVisible = false
            $scope.message = ''
          }, 2500)
        })
      },
      template: '<p ng-if="isVisible" class="alert alert-info">{{message}}</p>'
    }
  }
  ])
  .directive('navBar', [
    function () {
      return {
        controller: function ($scope, pagesFactory, $location) {
          var path = $location.path().substr(0, 6)
          if (path === '/admin') {
            $scope.navLinks = [{
              title: 'Pages',
              url: 'admin'
            }, {
              title: 'Site Settings',
              url: 'admin/site-settings'
            } ]
          } else {
            pagesFactory.getPages().then(
              function (response) {
                $scope.navLinks = response.data
              }, function () {

            })
          }
        },
        templateUrl: 'partials/directives/nav.html'

      }
    }
  ])
  .directive('adminLogin', [
    function () {
      return {
        controller: function ($scope, $cookies) {
          $scope.loggedInUser = $cookies.get('loggedInUser')
        },
        templateUrl: 'partials/directives/admin-login.html'
      }
    }
  ])
