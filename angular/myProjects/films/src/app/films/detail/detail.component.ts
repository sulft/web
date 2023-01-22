import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/film.model';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  film: Film;
  id: number;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private filmservice: FilmsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'), 10);
      this.filmservice.getFilm(this.id).subscribe((film) => {
        this.film = film;
      });
    });
  }

  

  supprimer(index: number) {
    this.filmservice.supprimerFilm(index).subscribe(() => {
      this.router.navigate(['/films'])
    });
  }
}


