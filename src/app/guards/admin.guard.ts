import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {

  //esto es una función por lo tanto no existe constructor
  //necesitamos inyectar servicios
  const _routerService = inject(Router);
  const _authService = inject(AuthService);


  if(_authService.isLoggedIn()){
    return true;
  }else{
    return _routerService.navigate(['/login'])
  }



};
