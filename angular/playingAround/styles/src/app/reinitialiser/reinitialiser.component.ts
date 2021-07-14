import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reinitialiser',
  templateUrl: './reinitialiser.component.html',
  styleUrls: ['./reinitialiser.component.css']
})
export class ReinitialiserComponent implements OnInit {

  @Input() compteur: number;
  constructor() { }

  ngOnInit(): void {
  }
}
