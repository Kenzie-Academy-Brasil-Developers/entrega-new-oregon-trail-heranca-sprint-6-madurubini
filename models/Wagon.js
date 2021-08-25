class Wagon {
    constructor(capacity){
        this._capacity = capacity
        this._travelers = []
    }

    set capacity(value){
        this._capacity = value;
    }

    get capacity() {
        return this._capacity;
    }

    set travelers(value){
        this._travelers = value;
    }

    get travelers() {
        return this._travelers;
    }

    getAvailableSeatCount(){
        return this._capacity
    }

    join(traveler) {
        if(this.travelers.length >= this._capacity){
            this.capacity = 0
            return `Carroça lotada`
        }

        if(this.travelers.length < this._capacity){
            this.capacity--
            this.travelers.push(traveler)
            
            return this.travelers
        }
    }

    shouldQuarantine() {
        if(!this.isHealthy){
            return true
        }
        else {
            return false
        }
    }

    totalFood() {
        let allFood = 0
       for(let i = 0; i < this.travelers.length; i++){
           allFood += this.travelers[i]._food           
       }
       return(allFood)
    }
}

module.exports = Wagon;