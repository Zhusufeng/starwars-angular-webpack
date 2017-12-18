angular.module('starwars').controller('charController', function (charService) {
  this.characters = [];
  this.characters = charService.getCharacters();
});