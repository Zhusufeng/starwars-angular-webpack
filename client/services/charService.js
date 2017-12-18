angular.module('starwars').service('charService', ($http) => {
  this.getCharacters = () => {
    console.log('this started the service');
    $http.get('https://swapi.co/api/people')
      .then((data) => {
        console.log('hey hey');

        console.log(data);
      });
  }
})