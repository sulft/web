import { Component, OnInit} from '@angular/core';
import { ToDos } from 'src/assets/models/toDos.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {

  toDosList:ToDos[];

  constructor() {
    this.toDosList = [
      new ToDos(1,"test1",new Date ,"je suis le premier test"),
      new ToDos(2,"test2",new Date ,"je suis le second test"),
      new ToDos(3,"test3",new Date ,"je suis le troisième test")
    ]
   }


  ngOnInit(): void {

  }

  sortedTodo() {
    return this.toDosList.sort((a: ToDos, b:ToDos) => b.id - a.id)
  }

  ajouterUnToDo(titre,description) {
    if(titre.value !== "") {
      this.toDosList.unshift(new ToDos((this.toDosList.length)+1,titre.value,new Date,description.value));
      titre.value = "";
      description.value = "";
    } else {
      alert("Veuillez au moins remplir le champs titre");
    }
    return false;
  }

  deleteTodo(val:ToDos) {
    console.log(val.id)
    this.toDosList.forEach((element,index) => {
      if(val.id == element.id) {
        this.toDosList.splice(index,1)
      }
    });
  }

}
