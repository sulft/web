import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .text-color {
    color:white;
  }
`]
})
export class AppComponent {
  flag:boolean = false;
  dates:Object[] = [];
  id:number=0;

  onDisplay(){
    console.log(this.flag);
    this.id++;
    this.flag = !this.flag;
    this.dates.push({id:this.id, date:new Date()})
  }

}
