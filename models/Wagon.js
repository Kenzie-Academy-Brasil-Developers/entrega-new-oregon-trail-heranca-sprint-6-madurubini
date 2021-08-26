class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.travelers = []
    }

    getAvailableSeatCount (){
        return this.capacity
    }

    join(traveler){
       

        if(this.travelers.length < this.capacity){
            this.capacity--
            this.travelers.push(traveler)
            
            return this.travelers
        }
    }

    shouldQuarantine() {
        let quarentine = false
        this.travelers.forEach(traveler => {
            if(traveler.isHealthy === 'false'){
                quarentine = true
            }
        })
        return quarentine
    }

    totalFood() {
        let total = 0
       for(let i = 0; i < this.travelers.length; i++){
        total += this.travelers[i].food
       }
       return(total)

    }
}

module.exports = Wagon;