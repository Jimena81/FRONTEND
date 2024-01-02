import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from '../../services/inmueble.service';

@Component({
  selector: 'app-list-finder',
  templateUrl: './list-finder.component.html',
  styleUrl: './list-finder.component.css'
})
export class ListFinderComponent implements OnInit{

  poblacion:number;
  tipo:number;
  operacion:string;

  aDatos:any[] = [];

  constructor(

    private _route:ActivatedRoute,
    private _router:Router,
    private _inmuebleService:InmuebleService,
  ){}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos():void{
  //necesitolas 3 variables de la ruta po, ti, op
    this._route.params.subscribe({
      next:(params)=>{
        this.poblacion=params['po']
        this.tipo=params['ti']
        this.operacion=params['op']
      },
      error:(error)=>{this._router.navigate(["/error"])},

      });
    this._inmuebleService.getInmueblesFinder(
      this.tipo,
      this.poblacion,
      this.operacion
    ).subscribe({

      next:(datos)=>{this.aDatos=datos},
      error:(error)=>{this._router.navigate(['/error'])},
      complete:()=>{}
    })

  }


}
