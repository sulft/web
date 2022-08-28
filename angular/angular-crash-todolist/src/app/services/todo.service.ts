import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return [
      {
        id:1,
        title:"Todo one",
        completed:true
      },
      {
        id:2,
        title:'Todo two',
        completed:false
      },
      {
        id:3,
        title:'Todo tree',
        completed:true
      },
    ]
  }
}
