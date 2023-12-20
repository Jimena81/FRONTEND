import { Component, OnInit } from '@angular/core';
import { Tipo } from '../../models/entity';
import { TipoService } from '../../services/tipo.service';

@Component({
  selector: 'app-list-tipo',
  templateUrl: './list-tipo.component.html',
  styleUrl: './list-tipo.component.css'
})
export class ListTipoComponent implements OnInit {

Datos:Tipo[]=[];

constructor(
  private _tipoService:TipoService

){}


  ngOnInit(): void {

    this.getDatos();

  }

  getDatos():void{

      this._tipoService.getTipos().subscribe({
//este metodo es un callback de subscribe
//es una subscripcion de los datos
        next:(datos)=>{console.log(datos)},
        error:(error)=>{},
        complete:()=>{}
      });

  }
}
