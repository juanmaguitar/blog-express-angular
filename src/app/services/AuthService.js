function AuthService ($http, $rootScope, StorageService, jwtHelper, $q) {
  function login ({username, password}) {
    return $http.post('/admin/login', { username, password })
        .then(response => response.data)
        .then(data => {
          StorageService.setToken(data.token)
          setCredentials(data.token)
          return data
        })
  }

  function register (username, password) {
    return $http.post('/admin/register', { username, password })
        .then(response => response.data)
  }

  function isLoggedIn () {
    const token = StorageService.getToken()
    if (!token) return false
    return true
  }

  function logout () {
    console.log('logouting...')
    StorageService.removeToken()
    delete $rootScope.loggedUser
    delete $rootScope.loggedUserId
    return $q.resolve()
  }

  function setCredentials (token) {
    var tokenPayload = jwtHelper.decodeToken(token)
    $rootScope.loggedUser = tokenPayload.username
    $rootScope.loggedUserId = tokenPayload.id
  }

  return { login, register, isLoggedIn, logout, setCredentials }
}

AuthService.$inject = ['$http', '$rootScope', 'StorageService', 'jwtHelper', '$q']

export default AuthService
