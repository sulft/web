import { Component, OnInit } from '@angular/core';
/* OBJET */
import { Hero } from '../hero';
/* SERVICE */
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService:HeroService,
  ) { }

  heroes:Hero[] = [];

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => 
        this.heroes = heroes);
  }
}
