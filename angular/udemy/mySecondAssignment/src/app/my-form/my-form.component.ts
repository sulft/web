import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',

})
export class MyFormComponent implements OnInit {

  username:string=""

  constructor() { }

  ngOnInit(): void {
  }

  onResetUsername() {
    this.username = "";
  }

}
