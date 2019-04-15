import { Subject, Observer } from "./interfaces";
import { WeatherStation } from './subject';


  export class TemperatureDisplay implements Observer {
    private subject: Subject;
  
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
  
    update(temperature: number) {
        console.log('TemperatureDisplay: I need to update my display');
    }
  }
  
  export class Fan implements Observer {
    private subject: Subject;
  
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
  
    update(temperature: number) {
        if (temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
        } else {
            console.log('Fan: Its nice and cool, turning myself off...');
        }
    }
  }
  

  