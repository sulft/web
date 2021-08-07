import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css']
})
export class BoutonsComponent implements OnInit {

  @Output() stop = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  isStopped(value:string) {
    this.stop.emit(value);
  }

}
