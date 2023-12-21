import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../../services/provincia.service';
import { Provincia } from '../../models/entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-provincia',
  templateUrl: './list-provincia.component.html',
  styleUrl: './list-provincia.component.css'
})
export class ListProvinciaComponent implements OnInit{

  Datos:Provincia[]=[];

  constructor(
    private _provinciaService:ProvinciaService,
    private _router:Router
  ) {

  }
  ngOnInit(): void {

    this.getDatos();
  }

  getDatos():void{

    this._provinciaService.getProvincias().subscribe({

      next:(datos)=>{this.Datos=datos},
      error:(error)=>{this._router.navigate(["/error"])},
      complete:()=>{}
    });

}







}
