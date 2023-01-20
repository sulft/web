import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean;
  username:string;

  constructor() {
    this.isLoggedIn = false;
  }

  login(username:string, password:string):Observable<boolean> {
    this.username = username;
    this.isLoggedIn = true;
    return of(this.isLoggedIn);
  }

  isLoggedin() {
    return this.isLoggedIn;
  }

  logout():void {
    this.isLoggedIn = false;
  }
}
