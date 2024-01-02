import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble, Poblacion, Tipo } from '../../models/entity';
import { InmuebleService } from '../../services/inmueble.service';
import { PoblacionService } from '../../services/poblacion.service';
import { TipoService } from '../../services/tipo.service';
import { CommunicationService } from '../../services/communication.service';


@Component({
  selector: 'app-add-inmueble',
  templateUrl: './add-inmueble.component.html',
  styleUrl: './add-inmueble.component.css'
})
export class AddInmuebleComponent implements OnInit {




  Poblaciones:Poblacion[];
  Tipos:Tipo[];

  /* ESTE OBJETO LO UTILIZAMOS SÓLO PARA RELLENARLO DESDE LA VISTA
  Y ENVIARLO A LA API */
  inmueble:Inmueble={

    activo:1,
    amueblado:0,
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
    operacion:"",
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

  constructor(
    private _poblacionService:PoblacionService,
    private _tipoService:TipoService,
    private _inmuebleService:InmuebleService,
    private _router:Router,
    private _communicationService:CommunicationService

  ){}


  ngOnInit(): void {

    this.getDatos();
    this._communicationService.cambioPortada(false);
    this._communicationService.cambioFooter(false);
  }

  getDatos():void{

    //Rellenar el select población con los datos de la BBDD
    this._poblacionService.getPoblaciones().subscribe({

      next: (datos)=>{this.Poblaciones = datos;}
      ,
      error: (error)=>{this._router.navigate(['/error'])}
      ,
      complete: ()=>{}

    });


    //Rellenar el select tipo con los datos de la BBDD
    this._tipoService.getTipos().subscribe({

      next: (datos)=>{this.Tipos = datos}
      ,
      error: (error)=>{this._router.navigate(['/error'])}
      ,
      complete: ()=>{}

    });




  }


  add():void{
    /* CONVERTIMOS LOS BOOLEAN DE LOS CHECKS EN NUMBER */
    this.inmueble.activo = Number(this.inmueble.activo);
    this.inmueble.amueblado = Number(this.inmueble.amueblado);
    this.inmueble.ascensor = Number(this.inmueble.ascensor);
    this.inmueble.jardin = Number(this.inmueble.jardin);
    this.inmueble.piscina = Number(this.inmueble.piscina);
    this.inmueble.portada = Number(this.inmueble.portada);
    this.inmueble.jardin = Number(this.inmueble.jardin);
    this.inmueble.tendedero = Number(this.inmueble.tendedero);
    this.inmueble.trastero = Number(this.inmueble.trastero);


    this._inmuebleService.addInmueble(this.inmueble).subscribe({

      next: (datos)=>{console.log(datos)}
      ,
      error: (error)=>{this._router.navigate(['/error'])}
      ,
      complete: ()=>{this._router.navigate(['/list-inmueble'])}

    });

  }




}
