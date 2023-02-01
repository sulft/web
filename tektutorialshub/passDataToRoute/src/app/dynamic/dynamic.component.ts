import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <H1>Passing Dynamic Data Demo</H1>

    {{ product | json }}
  `,
})
export class DynamicComponent implements OnInit {
  product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    this.product = history.state;
    console.log(history.state)
  }
}
