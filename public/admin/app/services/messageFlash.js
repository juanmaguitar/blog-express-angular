/* global angular */

(function () {
  'use strict'

  angular.module('myApp.services')
    .factory('flashMessageService', flashMessageService)

  flashMessageService.$inject = ['$rootScope']

  function flashMessageService ($rootScope) {
    var message = ''

    function getMessage () {
      return message
    }

    function setMessage (newMessage) {
      message = newMessage
      $rootScope.$broadcast('NEW_MESSAGE')
    }
    return { getMessage, setMessage }
  }
})()
