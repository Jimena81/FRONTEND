import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble } from '../../models/entity';
import { InmuebleService } from '../../services/inmueble.service';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-list-inmueble',
  templateUrl: './list-inmueble.component.html',
  styleUrls: ['./list-inmueble.component.css']
})
export class ListInmuebleComponent implements OnInit {
  Datos: Inmueble[] = [];

  constructor(
    private _inmuebleService: InmuebleService,
    private _communicationService: CommunicationService,
    private _router: Router
  ) {}

  ngOnInit(): void {

    this._communicationService.cambioPortada(false);
    this._communicationService.cambioFooter(false);
    this.getDatos();
  }

  getDatos(): void {
    this._inmuebleService.getInmuebles().subscribe({
      next: (datos) => {
        this.Datos = datos;
        console.log(this.Datos);
        for (let dato of this.Datos) {
          dato.direccionCompleta = `${dato.via} ${dato.nombreVia} ${dato.numero} ${dato.planta}${dato.puerta}`;
        }
      },
      error: (error) => {this._router.navigate(['/error']);},
      complete: () => {}
    });
  }
}
