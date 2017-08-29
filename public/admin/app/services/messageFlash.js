/* global angular */
'use strict'

angular.module('myApp.services')
  .factory('flashMessageService', ['$rootScope', function ($rootScope) {
    var message = ''
    return {
      getMessage: function () {
        return message
      },
      setMessage: function (newMessage) {
        message = newMessage
        console.log(`message: ${message}`)
        $rootScope.$broadcast('NEW_MESSAGE')
      }
    }
  }])
