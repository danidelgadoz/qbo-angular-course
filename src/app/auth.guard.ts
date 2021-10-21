import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// command to generate guard file:
// => ng g g auth

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isUserLogged: boolean = !!sessionStorage.getItem('userSession');

    if (isUserLogged === true ) {
      // if user has an active sessioon
      return true;
    }

    // if user has NOT a sessioon, so here we have to do something like redirecions or write audit logs
    this.router.navigate(['auth'], { queryParams: { blockedPage: state.url } });
    return false;
  }

}
