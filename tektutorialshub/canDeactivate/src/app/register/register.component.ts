import { Component } from '@angular/core';
import { IDeactivateComponent } from '../deactivate.guard';

@Component({
  template: `
    <h1>Register User</h1>
    <p> </p>
  `
})
export class RegisterComponent implements IDeactivateComponent {
      //vérifier s'il y des éléments non enregistré, si oui pour confirmer afficher appeler canExit
  canExit() : boolean {
    if (confirm("Do you wish to Please confirm")) {
        return true
      } else {
        return false
      }
    }
}
