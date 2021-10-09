import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  showMessage() {
    console.log("Voici votre liste d'utilisateur !");
  }
}
