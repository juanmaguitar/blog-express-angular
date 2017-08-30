function configRouteAbout($routeProvider) {
  $routeProvider
    .when('/about', {
      template: '<h1>About</h1>',
      controller: function ($rootScope) {
        console.log('About...')
        console.log($rootScope.phrase)
      }
    })
}

module.exports = configRouteAbout
