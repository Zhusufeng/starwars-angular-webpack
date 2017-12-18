angular.module('starwars').controller('charController', function (charService) {
  this.characters = [];
  charService.getCharacters()
    .then(res => {
      console.log('You received these results from charService', res.data.results)
      this.characters = res.data.results;
    });
});