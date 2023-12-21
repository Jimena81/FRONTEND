import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../../services/provincia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from '../../models/entity';

@Component({
  selector: 'app-edit-provincia',
  templateUrl: './edit-provincia.component.html',
  styleUrl: './edit-provincia.component.css'
})
export class EditProvinciaComponent implements OnInit{
  id:number;

  constructor(
    private _provinciaService:ProvinciaService,
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  provincia:Provincia={
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
        this._provinciaService.getProvincia(this.id).subscribe({

          next:(datos)=>{
            console.log(datos)
            //mapeamos los datos en la interface TIPO
          this.provincia.id= datos.id
          this.provincia.nombre= datos.nombre
          this.provincia.activo= datos.activo//ASIGNA EL 1 TRUE Y 0 FALSE
          },
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{}

      })

    }

  edit():void{

      this.provincia.activo = Number(this.provincia.activo);

    this._provinciaService.updateProvincia(this.provincia).subscribe({
        next:(datos)=>{console.log(datos)},
        error:(error)=>{this._router.navigate(["/error"])},
        complete:()=>{this._router.navigate(["/list-provincia"])}


    });


}
}
