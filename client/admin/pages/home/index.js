angular.module("myCoolApp")
  .config( function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/admin/pages/home/template.html',
          controller: 'HomeController'
        })
    })