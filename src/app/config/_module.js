import angular from 'angular'

import ngMarked from 'angular-marked'
import ngHighlight from 'angular-highlightjs'
// import ngMarkdownEditor from 'angular-markdown-editor'

import addInterceptor from './addInterceptor'
import markedSettings from './markedSettings'
import setRouteDefaults from './setRouteDefaults'

angular.module('myApp.config',
  [
    ngMarked,
    ngHighlight
    // ngMarkdownEditor
  ])
  .config(addInterceptor)
  .config(markedSettings)
  .config(setRouteDefaults)

export default 'myApp.config'
