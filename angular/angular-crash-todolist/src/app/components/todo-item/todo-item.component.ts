import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor( private todoService:TodoService) { }

  ngOnInit(): void {

  }

  //crée une classe dynamique
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }
  //onToggle
  onToggle(todo) {
    //toggle dans le site
    todo.completed = !todo.completed;
    //toggle dans serveur
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo) {
    console.log('delete');
  }

}
