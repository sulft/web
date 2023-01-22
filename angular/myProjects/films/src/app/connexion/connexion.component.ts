import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  connectForm: FormGroup;

  get identifiant() {
    return this.connectForm.get('identifiant');
  }

  get password() {
    return this.connectForm.get('mdp');
  }

  constructor(
    private fb: FormBuilder,
    private serv: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.connectForm = this.fb.group({
      identifiant: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  submitForm() {
    this.serv
      .login(this.identifiant.value, this.password.value)
      .subscribe((data) => {
        if (data) {
          console.log('connexion réussi');
          this.router.navigate(['films']);
        }
      });
  }
}
