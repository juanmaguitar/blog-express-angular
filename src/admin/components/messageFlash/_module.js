import angular from 'angular'

import template from './template.html'
import fnController, { name as controllerName } from './controller'

angular.module('messageFlash', [])
  .controller(controllerName, fnController)
  .component('messageFlash', {
    controller: controllerName,
    template
  })

export default 'messageFlash'
