import { Component, OnInit } from '@angular/core';
import { Tipo } from '../../models/entity';
import { TipoService } from '../../services/tipo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tipo',
  templateUrl: './edit-tipo.component.html',
  styleUrl: './edit-tipo.component.css'
})
export class EditTipoComponent implements OnInit{

  id:number;

  constructor(
    private _tipoService:TipoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  tipo:Tipo={
    id:0,
    nombre:"",
    activo:0

  }


  ngOnInit(): void {
    this.getDatos();
  }

  getDatos():void{

  //el primer dato que necesitamos es el id de la ruta
  //para acceder a los atributos del objeto
      this._route.params.subscribe({
        next:(params)=>{this.id=params['id']},
        error:(error)=>{this._router.navigate(["/error"])},
        //NO TIENE COMPLETE
        });


    //yA TENEMOS EL ID. LLAMAMOS A LA API
        this._tipoService.getTipo(this.id).subscribe({

          next:(datos)=>{
            console.log(datos)
            //mapeamos los datos en la interface TIPO
          this.tipo.id= datos.id
          this.tipo.nombre= datos.nombre
          this.tipo.activo= datos.activo//ASIGNA EL 1 TRUE Y 0 FALSE
          },
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{}

      })

    }

  edit():void{

      this.tipo.activo = Number(this.tipo.activo);

    this._tipoService.updateTipo(this.tipo).subscribe({
        next:(datos)=>{console.log(datos)},
        error:(error)=>{this._router.navigate(["/error"])},
        complete:()=>{this._router.navigate(["/list-tipo"])}


    });


}



}
