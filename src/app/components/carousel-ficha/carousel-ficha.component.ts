import { Component, Input } from '@angular/core';
import { Inmueble } from '../../models/entity';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-carousel-ficha',
  templateUrl: './carousel-ficha.component.html',
  styleUrl: './carousel-ficha.component.css'
})
export class CarouselFichaComponent {

  @Input() datosCarousel:any;
  url:string=GLOBAL.url_imagen;

}
