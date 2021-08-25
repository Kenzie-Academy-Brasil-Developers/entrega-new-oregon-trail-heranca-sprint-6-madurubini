const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { hunter, viajante } = require("./../../app");

  Given('um Hunter de nome {string}', function (string) {
      hunter.name = string
  });


  Given('ele sempre começa a viagem com {int} refeições', function (int) {
        hunter.food = int
  });


  Given('sempre começa a viagem saudável', function () {
        hunter.isHealthy = true
  });

