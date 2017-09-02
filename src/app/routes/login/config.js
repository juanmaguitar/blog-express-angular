import template from './template.html'
import { name as controller } from './controller'

function configRoute ($routeProvider) {
  $routeProvider
    .when('/login', {
      template,
      controller,
      secure: true
    })
}

configRoute.$inject = ['$routeProvider']

export default configRoute
