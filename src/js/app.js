const angular = require('angular')
const angularRoute = require('angular-route')

const HomeController = require('./pages/home/controller')
const HomeConfig = require('./pages/home/config')

const AboutConfig = require('./pages/about/config')
const ContactConfig = require('./pages/contact/config')

angular.module("myCoolApp", [angularRoute])
  .controller('HomeController', HomeController)
  .config( HomeConfig )
  .config( AboutConfig )
  .config( ContactConfig )