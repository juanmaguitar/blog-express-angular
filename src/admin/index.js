import angular from 'angular'
import angularRoute from 'angular-route'
import angularSanitize from 'angular-sanitize'

import filters from './filters/_module'
import services from './services/_module'
import config from './config/_module'
import routes from './routes/_module'
import components from './components/_module'

import 'font-awesome/scss/font-awesome.scss'
import './scss/app.scss'

angular.module('myApp', [
  angularRoute,
  angularSanitize,
  filters,
  services,
  config,
  routes,
  components
])
.run(function ($rootScope, $location, StorageService, AuthService) {
  if (AuthService.isLoggedIn()) {
    const token = StorageService.getToken()
    AuthService.setCredentials(token)
  }

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    console.log('route has changed')
    if (next && next.secure) {
      console.log('this route is secured!!')
      if (!AuthService.isLoggedIn()) {
        $location.path('/login')
      }
    }
  })
})
