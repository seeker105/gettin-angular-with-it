angular.module('bloonApp').service('bloonListService', [function(){
    
    this.bloonz = [
        {
            id: 1,
            name : "bloon johnson",
            color : "chartruse",
            price : "5.99"
        },
        {
            id: 2,
            name : "bloon toon",
            color : "red",
            price : "8.99"
        },
        {
            id: 3,
            name : "bloon moon",
            color : "green",
            price : "99.99"
        },
        {
            id: 4, 
            name : "dubloon johnson",
            color : "orange",
            price : "18.88"
        },
        {
            id: 5, 
            name : "andrew",
            color : "lemon",
            price : "44.55"
        },
        {
            id: 6, 
            name : "bloon bloon bloon",
            color : "purple",
            price : "8005.99"
        }
    ]


    this.getBloonz = () => this.bloonz

    this.getBloon = (id) => this.bloonz.find( bloon => bloon.id == id)
}])