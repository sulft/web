import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  /* 2.a) ajoutons le input qui va recevoir les données venant du composant todos*/
  @Input() todo:Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClass() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    }

    return classes
  }

  onToggle(todo) {
    todo.completed = !todo.completed; /* Cette modification n'influt que sur le UI hors je veux aussi que ça ai une influence sur le serveur */
  }

  onDelete(todo) {
    console.log('Delete ' + JSON.stringify(todo));
  }

}
