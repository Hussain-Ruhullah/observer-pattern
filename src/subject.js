"use strict";
exports.__esModule = true;
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update({ temperature: this.temperature, co2: this.co2 });
        }
    };
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    WeatherStation.prototype.setCO2 = function (co2) {
        console.log('WeatherStation: new CO2 measurement: ' + co2);
        this.co2 = co2;
        this.notifyObservers();
    };
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
// ------------------------------------------------------
