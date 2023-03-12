import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanLoad {
  canLoad(route: Route) {
    let url:string = route.path;
    console.log(url);

    if(url == "admin") {
      alert("Vous n'êtes pas autorisé à accéder à cette page : " + url);
      return false;
    }
    return true;
  }
}
