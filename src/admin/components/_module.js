import angular from 'angular'

import navBar from './navBar/_module'
import messageFlash from './messageFlash/_module'

angular.module('myApp.components',
  [
    navBar,
    messageFlash
  ])

export default 'myApp.components'
