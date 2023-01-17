import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
 
@Injectable()
export class ProductGuardService implements CanActivate, CanActivateChild {
 
  constructor(private _router:Router,private authService: AuthService ) {      
  }      
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     
    console.log("canActivate");     //return true 
    //remove comments to return true   
    alert('You are not allowed to view this page. You are redirected to Home Page');    
    //this._router.navigate(["home"]); //navigate to some other route;    
    return false;
  } 

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if (!this.authService.isAdminUser()) {
        alert('You are not allowed to view this page');
        return false;
      }
    return true;
  }
}