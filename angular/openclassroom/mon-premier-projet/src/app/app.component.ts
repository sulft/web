import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy  {

  secondes:number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (val) => {
        this.secondes = val;
      },
      (err) => {
        console.log('Uh-oh, an error occurred! : ' + err)
      },
      () => {
        console.log("Fin de l'opération")
      }
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe()
  }

}
