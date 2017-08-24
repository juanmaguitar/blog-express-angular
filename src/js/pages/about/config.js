function configRouteAbout($routeProvider) {
  $routeProvider
    .when('/about', {
      template: '<h1>About</h1>'
    })
}

module.exports = configRouteAbout


