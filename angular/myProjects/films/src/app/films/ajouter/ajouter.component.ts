import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from 'src/app/film.model';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
})
export class AjouterComponent implements OnInit {
  filmForm: FormGroup;
  constructor(
    private router: Router,
    private filmservice: FilmsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filmForm = this.fb.group({
      nom: ['', Validators.required],
      realisateur: ['', Validators.required],
      description: [''],
    });
  }

  submit() {
    const film: Film = {
      id: 0,
      nom: this.filmForm.value.nom,
      realisateur: this.filmForm.value.realisateur,
      description: this.filmForm.value.description
    };

    this.filmservice.addFilm(film).subscribe();

    this.router.navigate(['/films']);
  }
}
