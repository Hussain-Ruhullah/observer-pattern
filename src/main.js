"use strict";
exports.__esModule = true;
var subject_1 = require("./subject");
var observer_1 = require("./observer");
var weatherStation = new subject_1.WeatherStation();
var tempDisplay = new observer_1.TemperatureDisplay(weatherStation);
var fan = new observer_1.Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
