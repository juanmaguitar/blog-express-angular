import angular from 'angular'

import config from './config'
import HomeCtrl from './controller'

angular.module('myApp.routes.home', [])
  .controller('HomeCtrl', HomeCtrl)
  .config(config)

export default 'myApp.routes.home'
