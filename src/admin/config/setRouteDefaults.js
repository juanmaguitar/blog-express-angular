function setRouteDefaults ($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'})
  // $locationProvider.html5Mode(true)
}

setRouteDefaults.$inject = ['$locationProvider', '$routeProvider']

export default setRouteDefaults
