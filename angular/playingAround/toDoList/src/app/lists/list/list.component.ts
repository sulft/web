import { Component, Input, OnInit } from '@angular/core';
import { ToDos } from 'src/assets/models/toDos.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list:ToDos;

  constructor() { }

  ngOnInit(): void {
  }


}
