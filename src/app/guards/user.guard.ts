import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommunicationService } from '../services/communication.service';


export const userGuard: CanActivateFn = (route, state) => {
  const _routerService = inject(Router);
  const _authService = inject(AuthService);
  const _communicationService= inject(CommunicationService)


  if(_authService.isLoggedIn()){

    return true;

  }else{
    _communicationService.cambioLogueo(false);
    _routerService.navigate(["/login"]);
    return false;
  }

};
