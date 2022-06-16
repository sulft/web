import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //rends le service dans toute l'application avec le 'root'
})

/* exportation du service */
export class MessageService {

  constructor() { }

  getMessages() {
    return [
      {id:1, message:"je suis un test"},
      {id:2, message:"je suis un test 2"},
      {id:3, message:"je suis un test 3"}
    ]
  }
}
