function AddEditPostCtrl ($scope, $rootScope, $log, ApiService, $routeParams, $location, FlashMessageService, $filter, AuthService) {
  const id = $routeParams.id
  $scope.authorUsername = $rootScope.loggedUser
  const author = $rootScope.loggedUserId
  $scope.postContent = { id, author }
  $scope.heading = 'Add a New Page'
  $scope.mode = (id === '0') ? 'add' : 'edit'

  if (id !== '0') {
    $scope.heading = 'Update Page'
    ApiService.getDetailsPost(id)
      .then(detailsPost => {
        Object.assign($scope.postContent, detailsPost)
        $log.info($scope.postContent)
      })
      .catch(err => $log.error(err))
  }

  $scope.updateURL = function () {
    $scope.postContent.url = $filter('formatURL')($scope.postContent.title)
  }

  $scope.savePost = function () {
    ApiService
      .savePost($scope.postContent)
      .then(() => {
        FlashMessageService.setMessage('Page Saved Successfully')
        $location.path('/')
      })
      .catch(() => $log.error('error saving data'))
  }
}

AddEditPostCtrl.$inject = ['$scope', '$rootScope', '$log', 'ApiService', '$routeParams', '$location', 'FlashMessageService', '$filter', 'AuthService']

export default AddEditPostCtrl
export const name = 'AddEditPostCtrl'
