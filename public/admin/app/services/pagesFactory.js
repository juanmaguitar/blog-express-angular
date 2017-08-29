/* global angular */
'use strict'

angular.module('myApp.services')
  .factory('pagesFactory', ['$http', function ($http) {
    function getPages () {
      return $http.get('/api/pages')
              .then(response => response.data)
    }

    function savePage (pageData) {
      var id = pageData._id

      if (id === 0) {
        return $http.post('/api/pages/add', pageData)
      } else {
        return $http.post('/api/pages/update', pageData)
      }
    }

    function deletePage (id) {
      return $http.get('/api/pages/delete/' + id)
    }

    function getAdminPageContent (id) {
      return $http.get('/api/pages/admin-details/' + id)
    }

    function getPageContent (url) {
      return $http.get('/api/pages/details/' + url)
    }

    return { getPages, savePage, deletePage, getAdminPageContent, getPageContent }

  }])
