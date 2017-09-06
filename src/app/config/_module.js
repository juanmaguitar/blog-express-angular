import angular from 'angular'

import ngMarked from 'angular-marked'
import ngHighlight from 'angular-highlightjs'
import 'angular-markdown-editor/src/angular-markdown-editor.js'

import addInterceptor from './addInterceptor'
import markedSettings from './markedSettings'
import setRouteDefaults from './setRouteDefaults'

import 'bootstrap-markdown/js/bootstrap-markdown.js'

angular.module('myApp.config',
  [
    ngMarked,
    ngHighlight,
    'angular-markdown-editor'
  ])
  .config(addInterceptor)
  .config(markedSettings)
  .config(setRouteDefaults)

export default 'myApp.config'
