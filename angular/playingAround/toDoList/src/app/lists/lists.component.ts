import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDos } from 'src/assets/models/toDos.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {

  toDosList:ToDos[];
  myForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.toDosList = [
      new ToDos(1,"test1",new Date ,"je suis le premier test"),
      new ToDos(2,"test2",new Date ,"je suis le second test"),
      new ToDos(3,"test3",new Date ,"je suis le troisième test")
    ]
   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'titre':['', Validators.compose([Validators.minLength(3), Validators.required])],
      'description':['']
    })
  }

  sortedTodo() {
    return this.toDosList.sort((a: ToDos, b:ToDos) => b.id - a.id)
  }

  ajouterUnToDo(myForm:any) {
    var titre:string = ""
    var description:string = ""
    if(this.myForm.invalid) {
      alert("Veuillez au moins remplir le champs titre");
    } else {
      titre = myForm.titre;
      description = myForm.description;
      this.toDosList.unshift(new ToDos((this.toDosList.length)+1,titre,new Date,description));
      this.myForm.reset();
    }
 
  }

  deleteTodo(val:ToDos) {
    this.toDosList.forEach((element,index) => {
      if(val.id == element.id) {
        this.toDosList.splice(index,1)
      }
    });
  }

  editTodo() {

  }

}
