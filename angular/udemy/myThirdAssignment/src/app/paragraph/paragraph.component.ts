import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styles: ['.whiteColor { color : white}']
})
export class ParagraphComponent implements OnInit {

  index:number[]=[];
  value:number = 0;
  hidden:boolean = true;

  constructor() { }

  ngOnInit(): void { }

  addElement() {
    if(this.hidden==false) {
      this.hidden=true;
    } else {
      this.hidden=false;
    }
    this.value++;
    this.index.push(this.value);
  }

  changeBackgroundColor(val:number) {
    return val > 4 ? '#0d6efd' : 'none';
  }
}
