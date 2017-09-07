import angular from 'angular'

import config from './config'
import LoginCtrl from './controller'

angular.module('myApp.routes.login', [])
  .controller('LoginCtrl', LoginCtrl)
  .config(config)

export default 'myApp.routes.login'
