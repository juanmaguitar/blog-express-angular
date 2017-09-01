(function () {
  'use strict'

  angular.module('myApp').config(addInterceptor)

  function addInterceptor ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  }

  addInterceptor.$inject = ['$httpProvider']
})()
