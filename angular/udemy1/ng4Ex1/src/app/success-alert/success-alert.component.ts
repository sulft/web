import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div class="alert alert-success">Ceci est un message de succès!</div>`
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
