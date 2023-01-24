import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
  logged:boolean;

  constructor(private router: Router, private auth:AuthService) {}

  ngOnInit(): void {
    this.logged = this.auth.isLoggedin();
  }

  deconnexion() {
    this.auth.logout();
    this.router.navigate(['connexion']);
  }
}
