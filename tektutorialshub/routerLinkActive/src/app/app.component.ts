import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routerLinkActive';

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
    this.router.events
  .subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationStart) {
        console.log(event);
      }
    });
  }
}
