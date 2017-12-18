angular.module('starwars').controller('charController', (charService) => {
  this.characters = [];
  this.characters = charService.getCharacters();
});