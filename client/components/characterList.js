angular.module('starwars')
  .component('characterList', {
    controller: 'charController',
    templateUrl: 'components/views/char.html'
    // template: "<h1>Star Wars Character Names</h1>"
  });