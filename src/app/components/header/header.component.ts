import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{

  suscripcion:Subscription;

  veoCarousel:boolean=true;
constructor(
  private _communicationService:CommunicationService,
){}
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  ngOnInit(): void {

     this.suscripcion= this._communicationService.portada$.subscribe({
        next:(datos)=>{/*recibimos true o false*/this.veoCarousel=datos},
        error:(error)=>{},
        complete:()=>{}



    });
  }



}
