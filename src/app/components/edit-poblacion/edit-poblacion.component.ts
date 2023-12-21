import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoblacionService } from '../../services/poblacion.service';
import { Poblacion, Provincia } from '../../models/entity';
import { ProvinciaService } from '../../services/provincia.service';

@Component({
  selector: 'app-edit-poblacion',
  templateUrl: './edit-poblacion.component.html',
  styleUrl: './edit-poblacion.component.css'
})
export class EditPoblacionComponent implements OnInit{

  /////////////para el preloader//////////////////////
  nFases:number=2;
  cargaCompletada:boolean=false;
  fasesCargadas:number=0;
  ////////////////////////////////////////


  id:number;
  Provincias:Provincia[]=[];

  constructor(
    private _poblacionService:PoblacionService,
    private _provinciaService:ProvinciaService,
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  poblacion:Poblacion={
    id:0,
    nombre:"",
    provincia:{
      id:0,
      nombre:"",
      activo:0
    },
    activo:1

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

        this._provinciaService.getProvincias().subscribe({
          next:(datos)=>{this.Provincias=datos},
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{this.faseCarga()}


      });

    //yA TENEMOS EL ID. LLAMAMOS A LA API
        this._poblacionService.getPoblacion(this.id).subscribe({

          next:(datos)=>{
            console.log(datos)
            //mapeamos los datos en la interface TIPO
          this.poblacion.id= datos.id
          this.poblacion.nombre= datos.nombre
          this.poblacion.activo= datos.activo//ASIGNA EL 1 TRUE Y 0 FALSE
          this.poblacion.provincia.id= datos.provincia.id
          },
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{this.faseCarga()}

      })

    }

  edit():void{

      this.poblacion.activo = Number(this.poblacion.activo);
      this.poblacion.nombre=this.poblacion.nombre.toUpperCase();

      this._poblacionService.updatePoblacion(this.poblacion).subscribe({
        next:(datos)=>{console.log(datos)},
        error:(error)=>{this._router.navigate(["/error"])},
        complete:()=>{this._router.navigate(["/list-poblacion"])}


    });


}
////////////////para el preloader//////////////
faseCarga():void{

  this.fasesCargadas++;
  if(this.fasesCargadas== this.nFases){
    this.cargaCompletada = true;
  }

}
///////////////////////////////////////////////
}
