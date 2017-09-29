angular.module('bloonApp').service('robotListService', ['$http', function(http){

    this.getAllRobots = () => {
        return http.get('http://localhost:8888/api/robot')
    }

    this.createNewRobot = (newRobot) => {
        return http.post('http://localhost:8888/api/robot', newRobot)
    }

}])