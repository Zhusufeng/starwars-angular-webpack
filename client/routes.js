angular.module('starwars')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        template: '<character-list></character-list>'
      })
  
    $urlRouterProvider.otherwise('/');
  })