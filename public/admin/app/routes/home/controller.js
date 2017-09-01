(function () {
  'use strict'

  angular.module('myApp').controller('HomeCtrl', HomeCtrl)

  function HomeCtrl ($scope, $log, ApiService, AuthService, $location, $route) {
    ApiService.getPosts()
      .then(posts => { $scope.posts = posts })
      .catch(err => $log.error(err))

    $scope.deletePost = function (e, id) {
      e.preventDefault()
      ApiService.deletePost(id)
        .then(() => {
          console.log('item deleted')
          $route.reload()
        })
    }
  }

  HomeCtrl.$inject = ['$scope', '$log', 'ApiService', 'AuthService', '$location', '$route']
})()
