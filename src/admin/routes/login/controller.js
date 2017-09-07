function LoginCtrl ($scope, $rootScope, $location, AuthService, $log, FlashMessageService) {
  if (!AuthService.isLoggedIn()) $location.path('/')

  $scope.credentials = {
    username: '',
    password: ''
  }

  $scope.login = function (credentials) {
    AuthService.login(credentials)
      .then(res => {
        $location.path('/')
      })
      .catch(err => {
        FlashMessageService.setMessage(err.data)
        $log.log(err)
      })
  }
}

LoginCtrl.$inject = ['$scope', '$rootScope', '$location', 'AuthService', '$log', 'FlashMessageService']

export default LoginCtrl
export const name = 'LoginCtrl'
