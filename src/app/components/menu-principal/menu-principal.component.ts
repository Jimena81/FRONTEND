import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent implements OnInit, OnDestroy{

  suscripcion:Subscription;

  constructor(
    private _communicationService:CommunicationService,
    private _router:Router,

  ){}
  ngOnDestroy(): void {
    //así destruimos las suscripciones en el momento de montar el componente,
    //para evitar sobrecargas innecesarias
    this.suscripcion.unsubscribe();

  }

  ngOnInit(): void {

    // this.suscripcion= this._communicationService.portada$.subscribe({
    //     next:(datos)=>{},
    //     error:(error)=>{},
    //     complete:()=>{}



    // });
  }

administracion():void{
  this._communicationService.cambioPortada(false);
  this._communicationService.cambioFooter(false);
}

home():void{
  this._communicationService.cambioPortada(true);
  this._communicationService.cambioFooter(true);
}




}
