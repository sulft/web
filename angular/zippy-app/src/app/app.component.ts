import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'zippy-app';
  selectedList:any
  menuLists = ['kid','women','men']

  ngOnInit() {
    this.selectedList = this.menuLists[0];
  }

  openMenuList(menuList:any) {
    console.log(menuList);
    this.selectedList = menuList;
  }
}
