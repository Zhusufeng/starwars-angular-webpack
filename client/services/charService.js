angular.module('starwars').service('charService', function($http) {
  this.getCharacters = () => {
    console.log('charService is running...');
    return $http.get('https://swapi.co/api/people');
  }
})