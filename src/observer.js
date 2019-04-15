"use strict";
exports.__esModule = true;
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log('TemperatureDisplay: I need to update my display');
    };
    return TemperatureDisplay;
}());
exports.TemperatureDisplay = TemperatureDisplay;
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
        }
        else {
            console.log('Fan: Its nice and cool, turning myself off...');
        }
    };
    return Fan;
}());
exports.Fan = Fan;
