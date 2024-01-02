import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { InmuebleService } from '../../services/inmueble.service';

@Component({
  selector: 'app-detail-inmueble',
  templateUrl: './detail-inmueble.component.html',
  styleUrl: './detail-inmueble.component.css'
})
export class DetailInmuebleComponent implements OnInit {

   /////////////////////////////////////////////////
   nFases:number=1;
   cargaCompletada:boolean=false;
   fasesCargadas:number=0;
   /////////////////////////////////////////////////

   id:number;

   elInmueble:any={};

  constructor(
    private _communicationService:CommunicationService,
    private _inmuebleService:InmuebleService,
    private _router:Router,
    private _route:ActivatedRoute
  ){}


  ngOnInit(): void {
    this._communicationService.cambioPortada(false);
    this._communicationService.cambioFooter(false);
    this.getDatos();
  }

  getDatos():void{

        //El primer dato que necesito es es id de la ruta, porque sin él no podemos
    //acceder a los atributos del abjeto a modificar
    this._route.params.subscribe({
      next:(params)=>{this.id=params['id']},
      error:(error)=>{this._router.navigate(["/error"])},
      //NO TIENE COMPLETE
      });


    this._inmuebleService.getInmueble(this.id).subscribe({

      next: (datos)=>{this.elInmueble = datos}
      ,
      error: (error)=>{this._router.navigate(['/error'])}
      ,
      complete: ()=>{this.faseCarga()}

    });




  }//end getDatos


    ////////////////////////////////////////////////
    faseCarga():void{

      this.fasesCargadas++;
      if(this.fasesCargadas == this.nFases){
        this.cargaCompletada = true;
      }

    }
    ////////////////////////////////////////////////

}












