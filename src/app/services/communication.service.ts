import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  portadaCarousel = new BehaviorSubject(true);
  portada$= this.portadaCarousel.asObservable();

  footerVisible = new BehaviorSubject(true);
  footer$= this.footerVisible.asObservable();

  logueo = new BehaviorSubject(this._authService.isLoggedIn());
  logueo$ = this.logueo.asObservable();


  constructor(
    private _authService:AuthService,
  ) { }

  /*a este método se le llama por el componente que desea enviar la info
  mandando el dato(estado).
  el BehaviosSubject(portada)mediante next enviará info
  a todos los subcriptores del observable (portada$)*/
  cambioPortada(estado:boolean):void{

      this.portadaCarousel.next(estado);

  }

  cambioFooter(estado:boolean):void{

        this.footerVisible.next(estado);

    }

  cambioLogueo(estado:boolean):void{

      this.logueo.next(estado);

  }






}
