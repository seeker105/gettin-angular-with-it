angular.module('bloonApp').controller('bloonListController', ['bloonListService', function(bloonListService){

    this.bloonz = bloonListService.getBloonz();

}])