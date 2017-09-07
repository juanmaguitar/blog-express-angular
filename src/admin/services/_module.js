import angular from 'angular'
import angularJwt from 'angular-jwt'

import ApiService from './ApiService'
import AuthInterceptor from './AuthInterceptor'
import AuthService from './AuthService'
import FlashMessageService from './FlashMessageService'
import StorageService from './StorageService'

angular.module('myApp.services', [ angularJwt ])
  .factory('ApiService', ApiService)
  .factory('AuthInterceptor', AuthInterceptor)
  .factory('AuthService', AuthService)
  .factory('FlashMessageService', FlashMessageService)
  .factory('StorageService', StorageService)

export default 'myApp.services'
