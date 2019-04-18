import { Fan } from "../src/observer";
import {  Subject, Observer } from "../src/interfaces"
import { WeatherStation } from '../src/subject';

describe('testing Fan',()=>{
    let fan: Observer;
    let subject: Subject;

    beforeEach(()=>{
        subject = new WeatherStation();
        fan = new Fan(subject);
        subject.registerObserver(fan)
    })

    it('should Turn on if Temperature is more than 25 = temp > 25',()=>{
        expect(fan.update({temperature: 43})).toEqual('Fan: Its hot here, turning myself on...')
    })

    it('should Turn off if Temperature is less than 25 = temp < 25',()=>{
        expect(fan.update({temperature: 3})).toEqual('Fan: Its nice and cool, turning myself off...')
    })
    it('its Undefined',()=>{
        expect(fan.update({})).toBeUndefined()
    })

})