import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';




export const AuthGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log("AuthGuard çalıştı");
  if(inject(AuthService).isAuthenticate()){
    return true;
  }
  console.log("Giriş yapılamadı")
  return inject(Router).navigateByUrl('/login');
}
