import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent implements OnInit, OnDestroy{

  isLogged:boolean;
  suscripcion:Subscription;
  usuario:string;
  rol:string;


constructor(
  private _communicationService:CommunicationService,
  private _router:Router,
  private _authService:AuthService

){}





  ngOnInit(): void {
    this.suscripcion = this._communicationService.logueo$.subscribe({
        next:(info)=>{

            this.isLogged = info;

            if(this.isLogged){
              this.usuario = this._authService.getUsuario();
              this.rol = this._authService.getRol();
            }


        },
        error:(error)=>{this._router.navigate(['/error'])},
        complete:()=>{}
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }


logout():void{

  this.isLogged = false;
  this._authService.logOut();
  this._communicationService.cambioLogueo(false);
  this._router.navigate(['/home']);

}













}
