routes.$inject = ['$stateProvider', '$urlRouterProvider']
export default function routes ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<character-list></character-list>'
    });

  $urlRouterProvider.otherwise('/');
}