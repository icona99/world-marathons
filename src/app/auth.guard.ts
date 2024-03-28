import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthGuard canActivate isLogged:', this.authService.isLogged); // Извеждане на статуса на логването в конзолата
    console.log('AuthGuard canActivate state.url:', state.url); // Извеждане на URL адреса в конзолата

    if (this.authService.isLogged) {
      return true; // Потребителят е логнат - разрешаваме достъпа
    } else {
      // Потребителят не е логнат - пренасочваме към страницата за вход със запазване на текущия път
      this.authService.redirectUrl = state.url;
      console.log('AuthGuard canActivate redirectUrl:', this.authService.redirectUrl); // Извеждане на пренасочения URL адрес в конзолата
      return this.router.parseUrl('/login');
    }
  }
}




