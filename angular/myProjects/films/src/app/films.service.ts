import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  films: Film[];

  constructor() {
    this.films = [
      {
        id: 1,
        nom: 'Joker',
        realisateur: 'Todd Phillips',
        description:
          'Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société.',
      },
      {
        id: 2,
        nom: 'Black Panther',
        realisateur: 'Ryan Coogler',
        description:
          'La Reine Ramonda, Shuri, M’Baku, Okoye et les Dora Milaje luttent pour protéger leur nation des ingérences d’autres puissances mondiales après la mort du roi T’Challa. Alors que le peuple s’efforce d’aller de l’avant, nos héros vont devoir s’unir et compter sur l’aide de la mercenaire Nakia et d’Everett Ross pour faire entrer le royaume du Wakanda dans une nouvelle ère. Mais une terrible menace surgit d’un royaume caché au plus profond des océans : Talokan.',
      },
      {
        id: 3,
        nom: 'Kompromat',
        realisateur: 'Jérôme Salle',
        description:
          'Russie, 2017. Mathieu Roussel est arrêté et incarcéré sous les yeux de sa fille. Expatrié français, il est victime d’un « kompromat », de faux documents compromettants utilisés par les services secrets russes pour nuire à un ennemi de l’Etat. Menacé d’une peine de prison à vie, il ne lui reste qu’une option : s’évader, et rejoindre la France par ses propres moyens...',
      },
      {
        id: 4,
        nom: 'Haute couture',
        realisateur: 'Sylvie Ohayon',
        description:
          'Première d’atelier au sein de la Maison Dior, Esther participe à sa dernière collection de Haute Couture avant de prendre sa retraite. Un jour, elle se fait voler son sac dans le métro par Jade, 20 ans. Mais celle-ci, prise de remords, décide de lui restituer son bien. Séduite malgré elle par l’audace de la jeune fille et convaincue qu’elle a un don, Esther lui offre la chance d’intégrer les ateliers de la Maison Dior comme apprentie. L’occasion de transmettre à Jade un métier exercé depuis toujours pour la beauté du geste...',
      },
    ];
  }

  getFilms(): Observable<Film[]> {
    return of(this.films);
  }

  getFilm(id: number): Observable<Film> {
    return of(this.films[id]);
  }

  editFilm(film: Film, id: number): Observable<void> {
    this.films.splice(id, 1, film);
    return of();
  }

  supprimerFilm(index: number): Observable<Film[]> {
    this.films.splice(index, 1);
    return of(this.films);
  }
}
