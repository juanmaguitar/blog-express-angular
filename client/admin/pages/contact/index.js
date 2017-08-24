angular.module("myCoolApp")
  .config( function($routeProvider) {
      $routeProvider
        .when('/contact', {
          template: '<h1>Contact</h1>'
        })
    })