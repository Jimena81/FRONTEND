import { Component } from '@angular/core';
import { InmuebleService } from '../../services/inmueble.service';
import { PoblacionService } from '../../services/poblacion.service';
import { ProvinciaService } from '../../services/provincia.service';
import { Inmueble, Poblacion, Provincia, Tipo } from '../../models/entity';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-inmueble',
  templateUrl: './edit-inmueble.component.html',
  styleUrl: './edit-inmueble.component.css'
})
export class EditInmuebleComponent {

  /////////////para el preloader//////////////////////
  nFases:number=2;
  cargaCompletada:boolean=false;
  fasesCargadas:number=0;
  ////////////////////////////////////////


  id:number;
  Provincias:Provincia[]=[];
  Poblaciones:Poblacion[]=[];
  Tipos:Tipo[]=[];

  constructor(
    private _inmuebleService:InmuebleService,
    private _poblacionService:PoblacionService,
    private _provinciaService:ProvinciaService,
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  inmueble:Inmueble={
    id:0,
    amueblado:0,
    activo:1,
    apertura:"",
    ascensor:0,
    cp:"",
    descripcion:"",
    jardin:0,
    nombreVia:"",
    numero:"",
    numeroBalcones:"",
    numeroBanhos:"",
    numeroHabitaciones:"",
    orientacion:"",
    piscina:0,
    planta:"",
    plazasGaraje:"",
    portada:0,
    precio:0,
    puerta:"",
    superficieConstruida:"",
    superficieUtil:"",
    tendedero:0,
    tipoCalefaccion:"",
    titular:"",
    trastero:0,
    via:"",
    poblacion:{
      nombre:"",
      provincia:{
        nombre:"",
        activo:0

      },
      activo:0
    },
    tipo:{
      nombre:"",
      activo:0
    }

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

        this._poblacionService.getPoblacion().subscribe({
          next:(datos)=>{this.Poblaciones=datos},
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{this.faseCarga()}


      });

    //yA TENEMOS EL ID. LLAMAMOS A LA API
        this._inmuebleService.getInmueble(this.id).subscribe({

          next:(datos)=>{
            console.log(datos)
            //mapeamos los datos en la interface TIPO
          this.inmueble.id= datos.id
          this.inmueble.portada= datos.portada
          this.inmueble.portada= datos.portada
          this.inmueble.activo= datos.activo//ASIGNA EL 1 TRUE Y 0 FALSE
          this.inmueble.poblacion.id= datos.poblacion.id
          },
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{this.faseCarga()}

      })

    }

  edit():void{

      this.inmueble.activo = Number(this.inmueble.activo);


      this._inmuebleService.updateInmueble(this.inmueble).subscribe({
        next:(datos)=>{console.log(datos)},
        error:(error)=>{this._router.navigate(["/error"])},
        complete:()=>{this._router.navigate(["/list-inmueble"])}


    });


}
////////////////para el preloader//////////////
faseCarga():void{

  this.fasesCargadas++;
  if(this.fasesCargadas== this.nFases){
    this.cargaCompletada = true;
  }

}
}
