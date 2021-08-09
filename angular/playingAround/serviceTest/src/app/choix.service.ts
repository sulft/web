import { EventEmitter, Injectable } from "@angular/core";

@Injectable()

export class ChoixService {

  constructor() { }

  couleur = new EventEmitter<string>()
  
}
