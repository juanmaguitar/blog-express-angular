function HomeCtrl ($scope, $log, ApiService, AuthService, $location, $route, FlashMessageService) {
  ApiService.getPosts()
    .then(posts => { $scope.posts = posts })
    .catch(err => $log.error(err))

  $scope.deletePost = function (e, id) {
    e.preventDefault()
    ApiService.deletePost(id)
      .then(() => {
        FlashMessageService.setMessage(`Post Deleted`)
        $route.reload()
      })
  }
}

HomeCtrl.$inject = ['$scope', '$log', 'ApiService', 'AuthService', '$location', '$route', 'FlashMessageService']

export default HomeCtrl
export const name = 'HomeCtrl'
