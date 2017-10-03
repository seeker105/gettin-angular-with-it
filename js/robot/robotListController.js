angular.module('bloonApp').controller('robotListController', ['robotListService', function(listService){
 
    this.robots = this.resolvedRobots.data;

    this.createNewRobot = () => {

        listService.createNewRobot(this.newRobot).then((done) => {
            return listService.getAllRobots()
        }).then( (finishedProduct) => {
            this.robots = finishedProduct.data
        })
    }

}])