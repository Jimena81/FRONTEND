import { Component } from '@angular/core';
import { ProvinciaService } from '../../services/provincia.service';
import { Router } from '@angular/router';
import { Provincia } from '../../models/entity';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrl: './add-provincia.component.css'
})
export class AddProvinciaComponent {
  constructor(
    private _provinciaService: ProvinciaService,
    private _router:Router
    ){}



  provincia:Provincia={
    nombre:"",
    activo:1

  }



add():void{

this.provincia.nombre= this.provincia.nombre.toUpperCase();
this._provinciaService.addProvincia(this.provincia).subscribe({

    next:(datos)=>{console.log(datos)},
    error:(error)=>{this._router.navigate(["/error"])},
    complete:()=>{this._router.navigate(["/list-provincia"])}


});


}

}
