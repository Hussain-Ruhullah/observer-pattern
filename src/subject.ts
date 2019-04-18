import { Subject, Observer } from "./interfaces";

  
  export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number;
    private co2: number;
    
    registerObserver(o: Observer) {
        this.observers.push(o);
    }
  
    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
  
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update({ temperature: this.temperature, co2: this.co2});
        }
    }
  
    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    setCO2(co2: number) {
        console.log('WeatherStation: new CO2 measurement: ' + co2);
        this.co2 = co2;
        this.notifyObservers();
    }
  }
  
  // ------------------------------------------------------
