import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {

  @Output() stop = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  stopped() {
    this.stop.emit("stop");
  }

}
