import { Component, OnInit } from '@angular/core';
import { toDo } from 'src/models/toDo.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDos:toDo[] = [
    new toDo('titre1','description1',1,new Date),
    new toDo('titre2','description2',2,new Date),
    new toDo('titre3','description3',3,new Date)
  ]

  displayedColumns: string[] = ['titre', 'description', 'niveau-importance', 'creation'];
  dataSource = this.toDos;
  constructor() { }

  ngOnInit(): void {
  }

}
