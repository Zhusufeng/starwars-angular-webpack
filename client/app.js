const angular = require('angular');
const uirouter = require('angular-ui-router');

angular.module('starwars', [uirouter])

require('./routes');
require('./components');
require('./controllers');
require('./services');