import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes:Routes = [  
  {path: '', redirectTo : '/studentList', pathMatch : 'full'},  
  {path: 'studentList', component : StudentListComponent},  
  {path: 'studentDetails/:id/:name/:marks', component : StudentDetailsComponent},  
  {path: 'studentMarks', component : StudentMarksComponent},  
  {path: 'addStudent', component : StudentComponent},  
  {path: "**", component : NotFoundComponentComponent}  
];  

@NgModule({  
  imports : [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }
