import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student:any | null = {};  

  constructor(private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.student.id = this.route.snapshot.paramMap.get('id');  
    this.student.name = this.route.snapshot.paramMap.get('name');  
    this.student.marks = this.route.snapshot.paramMap.get('marks');  
  }

  gotoStudentList(){   
    this.router.navigate(['/studentList', this.student])  
  } 

}
