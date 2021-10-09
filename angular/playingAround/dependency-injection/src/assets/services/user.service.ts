import { Injectable } from '@angular/core';
import { ListOfUser } from 'src/app/listOfUser';
import { User } from '../models/user.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private message:MessageService) {

  }

  getUsers() {
    this.message.showMessage();
    return ListOfUser;
  }
}
