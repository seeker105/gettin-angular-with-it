angular.module('bloonApp').controller('bloonController', ['bloonService', function(bloonService) {

    this.showName = () => {
        alert('Name: ' + this.bloon.name)
    }
    
    this.increasePrice = bloonService.increasePrice(this)

    this.backgroundColor = { 'background-color': this.bloon.color };

}])