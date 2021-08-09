export class CounterService {
  counterInactiveActive = 0;
  counterActiveInactive = 0;


  addSetToInactive(){
    this.counterActiveInactive++;
    console.log(this.counterActiveInactive);
  }

  addSetToActive() {
    this.counterInactiveActive++;
    console.log(this.counterInactiveActive);
  }

  
}
