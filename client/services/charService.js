angular.module('starwars').service($http, () => {
  this.getCharacters = () => {
    return $http.get('https://swapi.co/api/people');
  }
})