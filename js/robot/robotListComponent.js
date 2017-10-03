angular.module('bloonApp').component('robotListComponent', {
    templateUrl: 'js/robot/robotListTemplate.html',
    controller: 'robotListController',
    bindings: {
        resolvedRobots: '='
    }
})