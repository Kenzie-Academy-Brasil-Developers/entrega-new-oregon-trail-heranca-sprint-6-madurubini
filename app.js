const Traveler  = require("./models/Traveler");
const Wagon     = require("./models/Wagon");
const Doctor  = require("./models/Doctor");

let viajante = new Traveler();
let carroca = new Wagon();
let doutor = new Doctor();

let viajanteSergio = new Traveler();
let viajanteSimone = new Traveler();
let viajanteSamuel = new Traveler();
let viajanteSandra = new Traveler();
let viajanteJoão   = new Traveler();
let viajanteDiego  = new Traveler();
let viajanteDiana  = new Traveler();

module.exports = {
    viajante,
    carroca,
    doutor
    
}