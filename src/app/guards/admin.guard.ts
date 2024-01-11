import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {

  //Estamos dentro de una función (no es ni siquiera un método)
  //Por lo tanto no tenemos constructor
  //Necesitamos inyectar servicios...¿como?
  const _routerService = inject(Router);
  const _authService = inject(AuthService);


  if(_authService.isLoggedIn() && _authService.getRol() == "admin"){

    return true;

  }else{

    _routerService.navigate(["/login"]);
    return false;
  }


}
