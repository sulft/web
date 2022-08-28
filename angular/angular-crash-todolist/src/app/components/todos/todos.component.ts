import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodoService) { } /* Utiliser principalement pour importer les services */

  todos:Todo[];

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

}
