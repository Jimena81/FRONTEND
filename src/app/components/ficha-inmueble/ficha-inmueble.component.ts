import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inmueble } from '../../models/entity';
import { AuthService } from '../../services/auth.service';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-ficha-inmueble',
  templateUrl: './ficha-inmueble.component.html',
  styleUrl: './ficha-inmueble.component.css'
})
export class FichaInmuebleComponent implements OnInit, OnDestroy {

  @Input() datos:Inmueble;
  suscripcion:Subscription;
  isLogged:boolean;
  usuario:string;
  rol:string;

  constructor(

    private _communicationService:CommunicationService,
    private _authService:AuthService,
    private _router:Router
  ){}
  ngOnInit(): void {
    this.suscripcion = this._communicationService.logueo$.subscribe({

      next: (info)=>{

        this.isLogged = info;

        if(this.isLogged){
          this.usuario = this._authService.getUsuario();
          this.rol = this._authService.getRol();
        }

      }
      ,
      error: (error)=>{this._router.navigate(['/error'])}
      ,
      complete: ()=>{}


    });
  }


  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}
