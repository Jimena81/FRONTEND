import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy {
  suscripcion:Subscription;

  esVisible:boolean=true;
constructor(
  private _communicationService:CommunicationService,
){}


  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }


  ngOnInit(): void {

     this.suscripcion= this._communicationService.footer$.subscribe({
        next:(datos)=>{/*recibimos true o false*/this.esVisible=datos},
        error:(error)=>{},
        complete:()=>{}



    });
}
}
