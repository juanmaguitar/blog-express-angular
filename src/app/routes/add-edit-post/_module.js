import angular from 'angular'

import config from './config'
import AddEditPostCtrl from './controller'

angular.module('myApp.routes.add-edit-post', [])
  .controller('AddEditPostCtrl', AddEditPostCtrl)
  .config(config)

export default 'myApp.routes.add-edit-post'
