import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  private _count = 0;

  @Input()
  set count(count:number) {
    this._count = count;
    console.log(count);
  }
  get count():number {
    return this._count; 
  }

  // @Input() count?:number;
  ngOnChanges(changes:SimpleChanges) {
    // for(let property in changes) {
    //   if(property === 'count') {
    //     console.log('Previous:', changes[property].previousValue);
    //     console.log('Current:', changes[property].currentValue);
    //     console.log('firstChange:', changes[property].firstChange);
    //   }
    // }
  }
}
