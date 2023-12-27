import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

constructor(

  private _communicationService:CommunicationService,

  ){}



  ngOnInit(): void {
    this._communicationService.cambioPortada(true);
    this._communicationService.cambioFooter(true);
  }

}
