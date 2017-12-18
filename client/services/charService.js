angular.module('starwars').service('charService', ($http) => {
  this.getCharacters = () => {
    return $http.get('https://swapi.co/api/people');
  }
})