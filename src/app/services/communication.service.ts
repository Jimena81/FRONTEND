import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  portadaCarousel = new BehaviorSubject(false);
  portada$= this.portadaCarousel.asObservable();

  footerVisible = new BehaviorSubject(false);
  footer$= this.footerVisible.asObservable();


  constructor() { }

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







}
