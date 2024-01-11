import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/entity';
import { CommunicationService } from '../../services/communication.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrl: './list-usuario.component.css'
})
export class ListUsuarioComponent implements OnInit {


    /////////////////////////////////////////////////
    nFases:number=1;
    cargaCompletada:boolean=false;
    fasesCargadas:number=0;
    /////////////////////////////////////////////////

    Datos:Usuario[]=[];

    constructor(
      private _usuarioService:UsuarioService,
      private _router:Router,
      private _communicationService:CommunicationService
    ){}

    ngOnInit(): void {
      this._communicationService.cambioPortada(false);
      this._communicationService.cambioFooter(false);
      this.getDatos();

    }


    getDatos():void{

      this._usuarioService.getUsuarios().subscribe({

        next: (datos)=>{ this.Datos=datos }
        ,
        error: (error)=>{this._router.navigate(['/error'])}
        ,
        complete: ()=>{this.faseCarga();}


      });

    }



  ////////////////////////////////////////////////
  faseCarga():void{

    this.fasesCargadas++;
    if(this.fasesCargadas == this.nFases){
      this.cargaCompletada = true;
    }

  }
  ////////////////////////////////////////////////

}
