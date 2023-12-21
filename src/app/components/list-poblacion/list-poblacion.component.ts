import { Component, OnInit } from '@angular/core';
import { Poblacion } from '../../models/entity';
import { PoblacionService } from '../../services/poblacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-poblacion',
  templateUrl: './list-poblacion.component.html',
  styleUrl: './list-poblacion.component.css'
})
export class ListPoblacionComponent implements OnInit{

  Datos:Poblacion[]=[];

  constructor(
    private _poblacionService:PoblacionService,
    private _router:Router
  ) {

  }

  ngOnInit(): void {
    this.getDatos();
  }




  getDatos():void{
  this._poblacionService.getPoblaciones().subscribe({

    next:(datos)=>{this.Datos=datos},
    error:(error)=>{this._router.navigate(["/error"])},
    complete:()=>{}
  });
}









}
