import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDos } from 'src/assets/models/toDos.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list:ToDos;
  @Output() onDeleteTodo = new EventEmitter<ToDos>();
  @Output() onEdit = new EventEmitter<ToDos>();
  editing:boolean=false;
  myForm:FormGroup;

  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'titre':[this.list.titre, Validators.compose([Validators.minLength(3), Validators.required])],
      'description':[this.list.description]
    });
  }

  deletingTodo(todo:ToDos):void {
    this.onDeleteTodo.emit(todo);
  }

  editingTodo(todo:ToDos):void {
    if(this.myForm.invalid) {
      console.log("erreur");
    } else {
      this.list.description = todo.description;
      this.list.titre = todo.titre;
      this.list.date = new Date();
      this.editing = false;
      this.onEdit.emit(this.list);
    }  
  }
}
