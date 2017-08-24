angular.module("myCoolApp")
  .config( function($routeProvider) {
      $routeProvider
        .when('/about', {
          template: '<h1>About</h1>'
        })
    })