import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>() ;
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverCreated.emit({serverName:nameInput.value, serverContent:this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({serverName:nameInput.value, serverContent:this.serverContentInput.nativeElement.value})
  }

}
