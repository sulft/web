import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private serv: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // dans le if on vérifie le user est connecté.
    if (!this.serv.isLoggedin()) {
      alert(
        'Vous n\'êtes pas autorisé à cette page. Vous êtes redirigé vers la page de connexion.'
      );
      this.router.navigate(['connexion'], { queryParams: { retUrl: route.url } });

      return false; //deux méthodes différentes pour renvoyer false ici //var urlTree = this.router.createUrlTree(['login']); //return urlTree;
    }

    return true;
  }
}
