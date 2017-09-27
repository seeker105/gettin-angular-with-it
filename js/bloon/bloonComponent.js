angular.module('bloonApp').component('bloonComponent', {

    templateUrl: 'js/bloon/bloonTemplate.html',
    controller: 'bloonController',
    bindings: {
        bloon: '='
    }

})