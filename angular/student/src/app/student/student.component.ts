import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  student : any = {  
    id: "", 
    name : "", 
    marks : ""  
  };  

  AddStudent(obj:any){  
    this.router.navigate(['/studentDetails', obj.id, obj.name, obj.marks]);  
  }  
}
