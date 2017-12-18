'use strict';

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function routes ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<character-list></character-list>'
    });

  $urlRouterProvider.otherwise('/');
}

module.exports = routes;