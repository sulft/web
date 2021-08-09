import { Component } from '@angular/core';
import { CounterService } from './counter-service.service';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {

  constructor(private usersService : UsersService, private counterService: CounterService) {
    this.onSetToInactive();
    this.onSetToActive();
  }

  activeUsers:string[] = [];
  inactiveUsers:string[] = [];


  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive() {
    this.usersService.userSetToInactive.subscribe(
      (usersID:number) => {
        this.usersService.onSetToInactive(usersID);
      }
    )
  }

  onSetToActive() {
    this.usersService.userSetToActive.subscribe(
      (usersID:number) => {
        this.usersService.onSetToActive(usersID);
      }
    )
  }
}
