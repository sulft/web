import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  heroes=HEROES;
  selectedHero:Hero;

  ngOnInit(): void {

  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }
}
