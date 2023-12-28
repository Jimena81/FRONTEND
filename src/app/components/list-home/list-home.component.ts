import { Component, OnInit } from '@angular/core';
import { InmuebleService } from '../../services/inmueble.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrl: './list-home.component.css'
})
export class ListHomeComponent implements OnInit{

aDatos:any[] = [];

constructor(

  private _inmuebleService:InmuebleService,
  private _router:Router
){}

ngOnInit(): void {
    this.getDatos();

  };
  getDatos():void{

    this._inmuebleService.getInmueblesPortada().subscribe({

      next: (datos)=>{this.aDatos = datos
      console.log(this.aDatos)},
      error: (error)=>{this._router.navigate(['/error'])},
      complete: ()=>{}

    });

  }

}
