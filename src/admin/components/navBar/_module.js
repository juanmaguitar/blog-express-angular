import angular from 'angular'

import template from './template.html'
import fnController, { name as controllerName } from './controller'

angular.module('navBar', [])
  .controller(controllerName, fnController)
  .component('navBar', {
    controller: controllerName,
    template
  })

export default 'navBar'
