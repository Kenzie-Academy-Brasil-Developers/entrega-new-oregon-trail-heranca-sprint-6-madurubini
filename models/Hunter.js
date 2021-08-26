const Traveler = require("./Traveler");

class Hunter extends Traveler {
    constructor(name, isHealthy, food) {
        super(name, isHealthy);
        this.food = Number(food)
        
    }

    hunt() {
        this.food += 5;
        return this.food;
    }

    eat() {
        if(this.food > 1){
            this.food -= 2;
            return this.food;
        }

        if(this.food <= 1){
            this.food = 0
            this.isHealthy = false;
            return this.isHealthy;
        }
    }

    giveFood(traveler, numOfFoodUnits) {

        if(this.food >= numOfFoodUnits){
            this.food -= Number(numOfFoodUnits);
            traveler.food += Number(numOfFoodUnits);
        }
        return traveler.food;
    }
}

module.exports = Hunter