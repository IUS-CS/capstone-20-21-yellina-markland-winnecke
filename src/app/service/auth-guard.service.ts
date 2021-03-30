import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
//import * as auth0 from 'auth0-js';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private router: Router) { }
  /*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isValid()) {
      return true;
    } else {
      this.router.navigate(['/admin/:id'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }

   */
}
