import { Component } from '@angular/core';
import { Inmueble } from '../../models/entity';
import { InmuebleService } from '../../services/inmueble.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-inmueble',
  templateUrl: './list-inmueble.component.html',
  styleUrl: './list-inmueble.component.css'
})
export class ListInmuebleComponent {
  Datos:Inmueble[]=[];

  constructor(
    private _inmuebleService:InmuebleService,
    private _router:Router
  ) {

  }
  ngOnInit(): void {

    this.getDatos();
  }

  getDatos():void{

    this._inmuebleService.getInmuebles().subscribe({

      next:(datos)=>{
        this.Datos=datos;
        console.log(this.Datos);
        for(let dato of this.Datos){
          dato.direccionCompleta=`${dato.via} ${dato.nombreVia} ${dato.numero} ${dato.planta}${dato.puerta}`
        }
      },
      error:(error)=>{this._router.navigate(["/error"])},
      complete:()=>{}
    });

}

}
