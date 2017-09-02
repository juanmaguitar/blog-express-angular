import angular from 'angular'

import formatURL from './formatURL'

angular.module('myApp.filters', [])
  .filter('formatURL', formatURL)

export default 'myApp.filters'
