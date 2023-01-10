import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../classes/contact';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  myCont = new BehaviorSubject<Contact>({id:1, prenom:'', nom:'', email:'', description:''});
  myContactCurrent = this.myCont.asObservable()

  constructor() { }

  chargeContact(contact:Contact) {
    console.log(contact);
    this.myCont.next(contact);
  }

}
