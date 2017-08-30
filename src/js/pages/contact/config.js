function configRouteContact($routeProvider) {
  $routeProvider
    .when('/contact', {
      template: '<h1>Contact</h1>',
      controller: function ($rootScope) {
        console.log('Contact...')
        console.log($rootScope.phrase)
      }

    })
}

module.exports = configRouteContact
