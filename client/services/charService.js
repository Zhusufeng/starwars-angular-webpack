export default class charService {
  constructor($http) {
    this.$http = $http
  }
  getCharacters() {
    console.log('charService is running...');
    return $http.get('https://swapi.co/api/people');
  }
}