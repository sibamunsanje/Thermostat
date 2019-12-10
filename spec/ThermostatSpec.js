"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it("starts at 20 degrees", function() {
      expect(thermostat.getCurrenttemperature()).toEqual(20);
    });
    it("increases in temperature with up()", function() {
      thermostat.up();
      expect(Thermostat.getCurrentTemperature()).toEqual(21);
    });
    it("decreases in temperature with down button", function () {
      thermostat.down();
      expect(thermostat.getCurrenttemperature()).toEqual(19);

    });
  });
