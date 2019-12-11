"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it("starts at 20 degrees", function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it("increases in temperature with up()", function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
    it("decreases in temperature with down button()", function () {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);

    });
    it("has a minimum temperature of 10 degrees", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
    it("has a power saving mode", function () {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it("can turn off power saving mode", function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it("can turn power saving mode back on", function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.turnOnPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
});
  });
