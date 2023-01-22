import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/film.model';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css'],
})
export class ModificationComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filmservice: FilmsService,
    private fb: FormBuilder
  ) {}

  id: number;
  film: Film;
  filmForm: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'), 10);
      this.filmservice.getFilm(this.id).subscribe((film) => {
        this.film = film;
        this.filmForm = this.fb.group({
          nom: [this.film.nom, Validators.required],
          realisateur: [this.film.realisateur, Validators.required],
          description: [this.film.description],
        });
      });
    });
  }
  

  submit() {
    this.film = {
      id: this.film.id,
      nom: this.filmForm.value.nom,
      realisateur: this.filmForm.value.realisateur,
      description: this.filmForm.value.description
    }
    
    this.filmservice.editFilm(this.film,this.id).subscribe();

    this.router.navigate(['/films']);
  }
}
