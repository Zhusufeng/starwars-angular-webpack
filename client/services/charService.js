'use strict';

charService.$inject = ['$http'];

function charService($http) {
  this.getCharacters = function() {
    console.log('charService is running...');
    return $http.get('https://swapi.co/api/people');
  }
}

module.exports = charService;