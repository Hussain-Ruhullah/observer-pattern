import { Subject, Observer } from "./interfaces";

  
  export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number;
  
    registerObserver(o: Observer) {
        this.observers.push(o);
    }
  
    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
  
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
  
    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
  }
  
  // ------------------------------------------------------