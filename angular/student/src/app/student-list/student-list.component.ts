import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public student = {  
    id: "" ,   
    name: "",   
    marks: ""  
   };  
   
  public students = [    
    {"id" : 1001, "name" : "Irshad", "marks" : 90},    
    {"id" : 1002, "name" : "Imran", "marks" : 80},    
    {"id" : 1003, "name" : "Rahul", "marks" : 70},    
    {"id" : 1004, "name" : "Ajay", "marks" : 85},    
    {"id" : 1005, "name" : "Sunny", "marks" : 60}    
    ];    
  constructor(private route: ActivatedRoute) { }  
  
  ngOnInit() {  
    this.student.id = this.route.snapshot.paramMap.get('id')!;  
    this.student.name = this.route.snapshot.paramMap.get('name')!;  
    this.student.marks = this.route.snapshot.paramMap.get('marks')!;  
  } 

}
