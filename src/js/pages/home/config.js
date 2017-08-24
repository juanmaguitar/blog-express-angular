function configRouteHome($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<h1>Home</h1>',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
}

module.exports = configRouteHome


