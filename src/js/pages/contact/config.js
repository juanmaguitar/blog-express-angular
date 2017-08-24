function configRouteContact($routeProvider) {
  $routeProvider
    .when('/contact', {
      template: '<h1>Contact</h1>'
    })
}

module.exports = configRouteContact


