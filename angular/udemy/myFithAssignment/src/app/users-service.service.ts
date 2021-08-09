import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter-service.service';

@Injectable()

export class UsersService {

  constructor(private counterService: CounterService) { }

  activeUsers:string[] = ['Max', 'Anna'];
  inactiveUsers:string[] = ['Chris', 'Manu'];  

  userSetToActive = new EventEmitter<number>();
  userSetToInactive = new EventEmitter<number>();

  numberInactive: number = 0;
  numberActive: number = 0;

  onSetToInactive(id: number) {
    this.counterService.addSetToInactive();
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.counterService.addSetToActive();
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
