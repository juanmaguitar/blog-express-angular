import angular from 'angular'

import routeAddEditPost from './add-edit-post/_module'
import routeHome from './home/_module'
import routeLogin from './login/_module'

angular.module('myApp.routes', [
  routeAddEditPost,
  routeHome,
  routeLogin
])

export default 'myApp.routes'
