charService.$inject = ['$http'];

export default function charService($http) {
  this.getCharacters = function() {
    console.log('charService is running...');
    return $http.get('https://swapi.co/api/people');
  }
}