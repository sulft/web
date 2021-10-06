import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDos } from 'src/assets/models/toDos.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list:ToDos;
  @Output() onDeleteTodo = new EventEmitter<ToDos>();

  constructor() { }

  ngOnInit(): void {

  }

  deletingTodo(todo:ToDos):void {
    this.onDeleteTodo.emit(todo);
  }
}
