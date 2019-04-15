
export interface Subject{
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
  }
  
  export interface Observer{
    update(temperature: number);
  }
  
  // ------------------------------------------------------