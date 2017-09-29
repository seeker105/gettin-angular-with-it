angular.module('bloonApp').component('bloonDetailComponent', {
    templateUrl: "/js/bloonDetail/bloonDetailTemplate.html",
    controller: "bloonDetailController",
    bindings: {
        bloon : "="
    }
})