"use strict";
// the function below declares thermostat function and the properties
// are that it returns 20. this creates an instance of
// thermostat object by running new Thermostat() with a property of 20.
function Thermostat() {
  this.MINIMUMTEMP = 10;
  this.POWERSAVINGMODE = true
  this.temperature = 20;

};

  Thermostat.prototype.getCurrentTemperature = function () {
    return this.temperature;
  };

  Thermostat.prototype.isMinimumTemperature = function () {
    return this.temperature === this.MINIMUMTEMP;
  };

  Thermostat.prototype.isPowerSavingModeOn = function() {
    return this.POWERSAVINGMODE === true;
  };
  Thermostat.prototype.turnOffPowerSavingMode = function() {
    return this.POWERSAVINGMODE = false;
  };
  Thermostat.prototype.turnOnPowerSavingMode = function() {
  this.POWERSAVINGMODE = true;
  };
//   Is is a function intended to return a boolean value.
//   === means a value is only strictly equal to itself.
// The prototype keyword acts as a storage area for Thermostat and
// binds the methodName 'getCurrenttemperature' to that function
//
// example code on binding a function =
// ClassName.prototype.methodName = function () {

  Thermostat.prototype.up = function() {
      this.temperature += 1;
    };

  Thermostat.prototype.down = function() {
      if (this.isMinimumTemperature()) {
        return;
      }
        this.temperature -= 1;
    };
  // Thermostat.prototype.isPowerSavingModeOn = function () {
  //     if (this.isPowerSavingModeOn()) {
  //       return this.POWERSAVINGMODE;
  //   };
  // };
