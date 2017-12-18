const angular = require('angular');
const uirouter = require('angular-ui-router');
const routes = require('./routes');
require('./components');
require('./controllers');
require('./services');

angular.module('starwars', [uirouter])
  .config(routes);