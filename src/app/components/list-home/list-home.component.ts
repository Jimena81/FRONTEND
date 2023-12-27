import { Component, OnInit } from '@angular/core';
import { InmuebleService } from '../../services/inmueble.service';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrl: './list-home.component.css'
})
export class ListHomeComponent implements OnInit{

aDatos:any[] = [];

constructor(){

}
  ngOnInit(): void {//borrar esto
    throw new Error('Method not implemented.');
  }





// ngOnInit(): void {
//     this.getDatos();

//   };
// getDatos():void{

//   this._inmuebleService.getInmueblePortada().subscribe({

//   })


// }

}
