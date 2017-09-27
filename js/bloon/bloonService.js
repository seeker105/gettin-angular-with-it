angular.module('bloonApp').service('bloonService', [function () {

    this.price = 1.99

    const listeningObjects = []

    this.increasePrice = (obj) => {

        if (obj) {
            listeningObjects.push(obj)
            return this.increasePrice
        }
        else {
            listeningObjects.forEach((listener) => {
                listener.price++
            });
        }

    }

}])