/* global angular */
'use strict'

angular.module('myApp.services')
  .factory('myHttpInterceptor', ['$q', '$location', function ($q, $location) {
    return {
      response: function (response) {
        return response
      },
      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/admin/login')
          return $q.reject(response)
        }
        return $q.reject(response)
      }
    }
  }])
