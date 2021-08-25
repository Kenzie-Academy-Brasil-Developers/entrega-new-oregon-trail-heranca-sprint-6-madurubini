const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doutor, viajante } = require("./../../app");

/** GIVEN */


Given('um Doctor de nome {string}', function (string) {
    doutor.name = string
 });

 
Given('o Doctor sempre começa a viagem com {int} refeição', function (int) {
   doutor.food = int
});  

Given('o Doctor sempre começa a viagem saudável', function () {
   doutor.isHealthy = true
 });

 Given('o viajante doente', function () {
   viajante.isHealthy = false
 });

 Given('o viajante saudável', function () {
   viajante.isHealthy = true
 });

 /** WHEN */
 When('o Doctor curá-lo', function () {
      doutor.heal(viajante)
 });


  /** THEN */

 Then('o viajante ficará saudável', function () {
   assert.strictEqual(viajante.isHealthy, true);
 });

 Then('o viajante manterá sua saúde', function () {
   assert.strictEqual(viajante.isHealthy, true);

 });
