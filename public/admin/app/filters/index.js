/* global angular */
'use strict'

angular.module('myApp.filters', [])
  .filter('formatURL', [
    function () {
      return function (input) {
        let url = input.replace(/[`~!@#$%^&*()_|+-=?;:'",.<>{}[\]]/gi, '')
        url = url.replace(/[\s+]/g, '-')
        return url.toLowerCase()
      }
    }
  ])
