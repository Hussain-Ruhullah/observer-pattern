import { WeatherStation } from './subject';
import { TemperatureDisplay, Fan } from './observer';


let weatherStation = new WeatherStation();
  
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
