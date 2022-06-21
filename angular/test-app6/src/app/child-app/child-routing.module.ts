import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { StudentComponent } from '../student/student.component';


const routes: Routes = [
    {
        path: 'student',
        title: 'student',
        component:StudentComponent,
        children: [
            {
                path: 'list',
                component:ListComponent 
            },
            {
                path: 'detail',
                component: DetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ChildRoutingModule { }