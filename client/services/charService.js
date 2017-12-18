angular.module('starwars').service($http, () => {
  $http.get('https://swapi.co/api/people')
    .then((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
})