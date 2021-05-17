import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  componentName="Composant fils";
  ngOnInit(): void {
  }


  switch(changement:boolean) {
    
  }
}
