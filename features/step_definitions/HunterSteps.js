const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { hunter, viajante } = require("./../../app");

/** GIVEN */


  Given('um Hunter de nome {string}', function (string) {
      hunter.name = string
  });


  Given('ele sempre começa a viagem com {int} refeições', function (int) {
        hunter.food = int
  });


  Given('sempre começa a viagem saudável', function () {
        hunter.isHealthy = true
  });

  Given('um viajante com {int} refeições', function (int) {
         viajante.food = int
   });

    /** WHEN */


 When('o Hunter sair para caçar {int} vezes', function (int) {
      for(let i = 0 ; i < int; i++){
              hunter.hunt()
      }
});

 When('o Hunter parar para comer {int} vezes', function (int) {
       for(let i = 0 ; i < int; i++){
              hunter.eat()
       }
 });

 When('o Hunter tranferir {int} refeições', function (int) {
      for(let i = 0 ; i < int; i++){
            hunter.giveFood(viajante, numOfFoodsUnits)
     }
}); 
When('a comida do Hunter for maior que {int}', function (int) {
      hunter.food > int
});
      
When('a comida do Hunter for menor ou igual a {int}', function (int) {
      hunter.food <= int

});

    /** THEN */

 Then('o Hunter não ficará doente', function () {
      assert.strictEqual(hunter.isHealthy, true);
});    

Then('a quantidade de refeições for igual {int}', function (int) {
      assert.strictEqual(hunter.food, int);
});

Then('o Hunter ficará doente', function () {
      assert.strictEqual(hunter.isHealthy, false);
});

Then('o viajante ficará com {int} refeições', function (int) {
      assert.strictEqual(viajante.food, int);
});


Then('o Hunter ficará com {int} refeiçoes', function (int) {
      assert.strictEqual(hunter.food, int);
});

Then('a quantidade de refeições for igual a {int}', function (int) {
      assert.strictEqual(hunter.food, int);
 });