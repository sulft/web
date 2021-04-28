import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes'
import { MessageService } from 'src/app/service/message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService:MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //SIMULE l'obtention de donnée d'un serveur
    this.messageService.add('HeroService: Fetched Heroes')
    return heroes;
  }
  
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
