/* global angular */
'use strict'

angular.module('myApp.filters', [])
  .filter('interpolate', ['version', function (version) {
    return function (text) {
      return String(text).replace(/%VERSION%/mg, version)
    }
  }])
  .filter('formatURL', [
    function () {
      return function (input) {
        let url = input.replace(/[`~!@#$%^&*()_|+-=?;:'",.<>{}[\]]/gi, '')
        url = url.replace(/[s+]/g, '-')
        return url.toLowerCase()
      }
    }
  ])
