angular.module('bloonApp').controller('bloonListController', ['bloonListService', function(bloonListService){

    this.bloonz = [
        {
            name : "bloon johnson",
            color : "chartruse",
            price : "5.99"
        },
        {
            name : "bloon toon",
            color : "red",
            price : "8.99"
        },
        {
            name : "bloon moon",
            color : "green",
            price : "99.99"
        },
        {
            name : "dubloon johnson",
            color : "orange",
            price : "18.88"
        },
        {
            name : "andrew",
            color : "lemon",
            price : "44.55"
        },
        {
            name : "bloon bloon bloon",
            color : "purple",
            price : "8005.99"
        }
    ]

}])