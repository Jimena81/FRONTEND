import { Component } from '@angular/core';
import { Inmueble, Poblacion, Provincia, Tipo } from '../../models/entity';
import { InmuebleService } from '../../services/inmueble.service';

import { ActivatedRoute, Router } from '@angular/router';
import { PoblacionService } from '../../services/poblacion.service';
import { TipoService } from '../../services/tipo.service';

@Component({
  selector: 'app-edit-inmueble',
  templateUrl: './edit-inmueble.component.html',
  styleUrl: './edit-inmueble.component.css'
})
export class EditInmuebleComponent {
  id:number;
  Poblaciones:Poblacion[]=[];
  Tipos:Tipo[]=[];

  constructor(
    private _inmuebleService:InmuebleService,
    private _poblacionService:PoblacionService,
    private _tipoService:TipoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){}
  //mapeamos los datos
  inmueble:Inmueble;

  // inmueble:Inmueble={
  //   activo:1,
  //   amueblado:0,
  //   apertura:"",
  //   ascensor:0,
  //   cp:"",
  //   descripcion:"",
  //   jardin:0,
  //   nombreVia:"",
  //   numero:"",
  //   numeroBalcones:"",
  //   numeroBanhos:"",
  //   numeroHabitaciones:"",
  //    operacion:"",
  //   orientacion:"",
  //   piscina:0,
  //   planta:"",
  //   plazasGaraje:"",
  //   portada:0,
  //   precio:0,
  //   puerta:"",
  //   superficieConstruida:"",
  //   superficieUtil:"",
  //   tendedero:0,
  //   tipoCalefaccion:"",
  //   titular:"",
  //   trastero:0,
  //   via:"",
  //   poblacion:{
  //     nombre:"",
  //     provincia:{
  //       nombre:"",
  //       activo:0

  //     },
  //     activo:0
  //   },
  //   tipo:{
  //     nombre:"",
  //     activo:0
  //   }

  // }


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

        this._poblacionService.getPoblaciones().subscribe({
          next:(datos)=>{this.Poblaciones=datos},
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{}
        });
        this._tipoService.getTipos().subscribe({
          next:(datos)=>{this.Tipos=datos},
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{}
        });

    //yA TENEMOS EL ID. LLAMAMOS A LA API
        this._inmuebleService.getInmueble(this.id).subscribe({

          next:(datos)=>{
            console.log(datos)
            //mapeamos los datos en la interface TIPO
            this.inmueble=datos
          // this.inmueble.id= datos.id
          // this.inmueble.activo= datos.activo//ASIGNA EL 1 TRUE Y 0 FALSE
          // this.inmueble.portada= datos.portada
          // this.inmueble.titular= datos.titular
          // this.inmueble.descripcion= datos.descripcion
          // this.inmueble.precio= datos.precio
          // this.inmueble.tipo.id= datos.tipo.id
          // this.inmueble.tipo.nombre= datos.tipo.nombre
          // this.inmueble.via= datos.via
          // this.inmueble.nombreVia= datos.nombreVia
          // this.inmueble.numero= datos.numero
          // this.inmueble.planta= datos.planta
          // this.inmueble.puerta= datos.puerta
          // this.inmueble.cp= datos.cp
          // this.inmueble.poblacion.id= datos.poblacion.id
          // this.inmueble.poblacion.nombre= datos.poblacion.nombre
          // this.inmueble.poblacion.provincia.id= datos.poblacion.provincia.id
          // this.inmueble.poblacion.provincia.nombre= datos.poblacion.provincia.nombre
          // this.inmueble.superficieConstruida= datos.superficieConstruida
          // this.inmueble.superficieUtil= datos.superficieUtil
          // this.inmueble.apertura= datos.apertura
          // this.inmueble.numeroBalcones= datos.numeroBalcones
          // this.inmueble.numeroBanhos= datos.numeroBanhos
          // this.inmueble.numeroHabitaciones= datos.numeroHabitaciones
          // this.inmueble.orientacion= datos.orientacion
          // this.inmueble.plazasGaraje= datos.plazasGaraje
          // this.inmueble.tipoCalefaccion= datos.tipoCalefaccion
          // this.inmueble.ascensor= datos.ascensor
          // this.inmueble.jardin= datos.jardin
          // this.inmueble.amueblado= datos.amueblado
          // this.inmueble.tendedero= datos.tendedero
          // this.inmueble.piscina= datos.piscina
          // this.inmueble.trastero= datos.trastero
        },
          error:(error)=>{this._router.navigate(["/error"])},
          complete:()=>{}

      })

    }

  edit():void{

      this.inmueble.activo = Number(this.inmueble.activo);
      this.inmueble.portada = Number(this.inmueble.portada);
      this.inmueble.tendedero = Number(this.inmueble.tendedero);
      this.inmueble.amueblado = Number(this.inmueble.amueblado);
      this.inmueble.trastero = Number(this.inmueble.trastero);
      this.inmueble.piscina = Number(this.inmueble.piscina);
      this.inmueble.jardin = Number(this.inmueble.jardin);
      this.inmueble.ascensor = Number(this.inmueble.ascensor);


      this._inmuebleService.updateInmueble(this.inmueble).subscribe({
        next:(datos)=>{console.log(datos)},
        error:(error)=>{this._router.navigate(["/error"])},
        complete:()=>{this._router.navigate(["/list-inmueble"])}


    });


}
}
