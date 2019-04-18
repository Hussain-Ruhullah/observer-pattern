"use strict";
exports.__esModule = true;
// Observer One
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (state) {
        console.log('TemperatureDisplay: I need to update my display to ' + state.temperature);
    };
    return TemperatureDisplay;
}());
exports.TemperatureDisplay = TemperatureDisplay;
// Observer Two
var CO2Display = /** @class */ (function () {
    function CO2Display(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    CO2Display.prototype.update = function (state) {
        console.log('CO2Display: I need to update my display to ' + state.co2);
    };
    return CO2Display;
}());
exports.CO2Display = CO2Display;
// Observer Tree
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (state) {
        if (state.temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
            return 'Fan: Its hot here, turning myself on...';
        }
        else if (state.temperature < 25) {
            console.log('Fan: Its nice and cool, turning myself off...');
            return 'Fan: Its nice and cool, turning myself off...';
        }
        else {
            console.log('Fan: no valid input found...');
            return state.temperature;
        }
    };
    return Fan;
}());
exports.Fan = Fan;
