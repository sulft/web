import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rooting';
  pageNum = 0;

  constructor (
    private authService:AuthService, 
    private router:Router
    ) { }


  logout() {
    this.authService.logoutUser();
    this.router.navigate(['home']);
  }

}
