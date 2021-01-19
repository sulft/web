import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/todo'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=10';

  constructor(private http:HttpClient) { }

  //get Todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>('${this.todosUrl}${this.todosLimit}');
  }

  //toggle Completed
  toggleCompleted(todo : Todo):Observable<any> {
    const url = '${this.todosUrl}/${todo.id}';
    return this.http.put(url, todo, httpOptions);
  }
}
