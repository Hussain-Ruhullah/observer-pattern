import { Subject, Observer } from "./interfaces";


// Observer One
export class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(state: Object) {
        console.log('TemperatureDisplay: I need to update my display to ' + state.temperature);
    }
}

// Observer Two
export class CO2Display implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(state: Object) {
        console.log('CO2Display: I need to update my display to ' + state.co2);
    }
}

// Observer Tree
export class Fan implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(state: Object) {
        if (state.temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
            return 'Fan: Its hot here, turning myself on...';
        } else if(state.temperature < 25) {
            console.log('Fan: Its nice and cool, turning myself off...');
            return 'Fan: Its nice and cool, turning myself off...';
        } else {
            console.log('Fan: no valid input found...');
            return state.temperature;
        }
    }
}
