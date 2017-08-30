/* global angular */
'use strict'

angular.module('myApp.services')
  .factory('pagesFactory', ['$http', function ($http) {
    function getPages () {
      return $http.get('/api/pages')
              .then(res => res.data)
    }

    function savePage (pageData) {
      var id = pageData.id

      if (id === '0') {
        return $http.post('/api/pages/add', pageData)
      } else {
        return $http.post('/api/pages/update', pageData)
      }
    }

    function deletePage (id) {
      return $http.get('/api/pages/delete/' + id)
    }

    function getDetailsPage (id) {
      return $http.get('/api/pages/admin-details/' + id)
                .then(res => res.data)
    }

    return { getPages, savePage, deletePage, getDetailsPage }

  }])
