"use strict";
//the function below declares thermostat function and the properties
// are that it returns 20. this creates an instance of
//thermostat object by running new Thermostat() with a property of 20.
function Thermostat() {

  this.temperature = 20;

};

  Thermostat.prototype.getCurrentTemperature = function () {
    return this.temperature; };
//The prototype keyword acts as a storage area for Thermostat and
// binds the methodName 'getCurrenttemperature' to that function

// example code on binding a function =
//ClassName.prototype.methodName = function () {

    Thermostat.prototype.up = function () {
      this.temperature += 1;
    };

    Thermostat.prototype.down = function () {
      this.temperature -= 1;
    };
