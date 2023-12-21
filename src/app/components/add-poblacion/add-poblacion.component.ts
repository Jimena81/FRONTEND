import { Component, OnInit } from '@angular/core';
import { PoblacionService } from '../../services/poblacion.service';
import { Router } from '@angular/router';
import { Poblacion, Provincia } from '../../models/entity';
import { ProvinciaService } from '../../services/provincia.service';

@Component({
  selector: 'app-add-poblacion',
  templateUrl: './add-poblacion.component.html',
  styleUrl: './add-poblacion.component.css'
})
export class AddPoblacionComponent implements OnInit{


Provincias:Provincia[]=[];

  constructor(
    private _poblacionService: PoblacionService,
    private _provinciaService: ProvinciaService,
    private _router:Router
    ){}


    ngOnInit(): void {
      this.getDatos();
  }



  poblacion:Poblacion={
    nombre:"",
    provincia:{

      nombre:"",
      activo:0
    },
    activo:1

  }

getDatos():void{

    this._provinciaService.getProvincias().subscribe({
      next:(datos)=>{this.Provincias = datos},
      error:(error)=>{this._router.navigate(["/error"])},
      complete:()=>{},


    });

}

add():void{

this.poblacion.nombre= this.poblacion.nombre.toUpperCase();
this._poblacionService.addPoblacion(this.poblacion).subscribe({

    next:(datos)=>{console.log(datos)},
    error:(error)=>{this._router.navigate(["/error"])},
    complete:()=>{this._router.navigate(["/list-poblacion"])}


});


}
}
