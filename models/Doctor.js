let Traveler = require("./Traveler")

class Doctor extends Traveler{
    constructor(name, isHealthy, food){
        super(name, isHealthy, food)
    }

    heal(traveler){
        if (traveler.isHealthy === false){
            traveler.isHealthy = true
        }
        return traveler.isHealthy
    }

}

module.exports = Doctor;