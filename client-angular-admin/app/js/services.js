/* global angular */
'use strict'

/* Services */

angular.module('myApp.services', [])
  .value('version', '0.1')
  .factory('pagesFactory', ['$http', function ($http) {
    return {
      getPages: function () {
        return $http.get('/api/pages')
                .then( response => response.data )
      },

      savePage: function (pageData) {
        var id = pageData._id

        if (id === 0) {
          return $http.post('/api/pages/add', pageData)
        } else {
          return $http.post('/api/pages/update', pageData)
        }
      },
      deletePage: function (id) {
        return $http.get('/api/pages/delete/' + id)
      },
      getAdminPageContent: function (id) {
        return $http.get('/api/pages/admin-details/' + id)
      },
      getPageContent: function (url) {
        return $http.get('/api/pages/details/' + url)
      }
    }
  }])
