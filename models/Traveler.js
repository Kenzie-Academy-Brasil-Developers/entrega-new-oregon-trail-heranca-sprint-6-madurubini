class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }


    hunt(){
        return this.food += 2
    }

    eat(){
        if (this.food > 0){
            return this.food--
        }
        
        if( this.food === 0){
            this.isHealthy = false
            return this.isHealthy
        }
    }

}

module.exports = Traveler;