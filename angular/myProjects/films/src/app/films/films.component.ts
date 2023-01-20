import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  films: Film[];

  constructor(private filmservice: FilmsService) {}

  ngOnInit(): void {
    this.filmservice.getFilms().subscribe((films) => {
      this.films = films;
    });
  }

  supprimer(index: number) {
    this.filmservice.supprimerFilm(index).subscribe((films) => {});
  }
}
