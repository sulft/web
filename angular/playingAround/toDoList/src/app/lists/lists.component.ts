import { Component, OnInit } from '@angular/core';
import { ToDos } from 'src/assets/models/toDos.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {

  toDosList:ToDos[];

  constructor() { }


  ngOnInit(): void {
    this.toDosList = [
      new ToDos(1,"test1",new Date ,"je suis le premier test"),
      new ToDos(2,"test2",new Date ,"je suis le second test")
    ]
  }

  sortedTodo() {
    return this.toDosList.sort((a: ToDos, b:ToDos) => b.id - a.id)
  }

  ajouterUnToDo(titre,description) {
    if(titre.value !== "") {
      this.toDosList.push(new ToDos((this.toDosList.length)+1,titre.value,new Date,description.value));
      titre.value = "";
      description.value = "";
    } else {
      alert("Veuillez au moins remplir le champs titre");
    }
  }

}
