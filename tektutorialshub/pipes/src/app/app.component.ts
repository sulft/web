 
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    template: `<p>Unformatted :{{cur}} </p>
               <p>Example 1 :{{cur | currency }} </p>
               <p>Example 2 :{{cur | currency:'INR':true:'4.2-2'}} </p>`
})
 
export class AppComponent
{
    title: string = 'Angular pipes Example' ;
    cur: number= 175;
}