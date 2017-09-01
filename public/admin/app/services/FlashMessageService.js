(function () {
  'use strict'

  angular.module('myApp.services')
    .factory('FlashMessageService', FlashMessageService)

  function FlashMessageService ($rootScope) {
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

  FlashMessageService.$inject = ['$rootScope']
})()
