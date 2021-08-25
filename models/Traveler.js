class Traveler {
    constructor(name){
        this.name = name
        this._food = 1
        this.isHealthy = true
    }

    get food() {
        return this._food
    }

    set food(value) {
        this._food = value
    }

    hunt(){
        return this._food += 2
    }

    eat(){
        if (this._food > 0){
            return this._food--
        }
        
        if( this.food === 0){
            this.isHealthy = false
            return this.isHealthy
        }
    }

}

module.exports = Traveler;