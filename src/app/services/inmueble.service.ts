import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inmueble } from '../models/entity';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  url:string= GLOBAL.url;
  constructor(

    private _http:HttpClient
  ) { }



  getInmuebles():Observable<Inmueble[]>{

    return this._http.get<Inmueble[]>(this.url + "inmuebles");
   }
  getInmueble(id:number):Observable<Inmueble>{

      return this._http.get<Inmueble>(this.url + "inmueble/" + id);
    }

  getInmueblesPortada():Observable<Inmueble[]>{

    return this._http.get<Inmueble[]>(this.url + "inmuebles-portada");
   }

   getInmueblesActivo():Observable<Inmueble[]>{

    return this._http.get<Inmueble[]>(this.url + "inmuebles-activos");
   }

   getInmueblesFinder(tipo:number, poblacion:number, operacion:string):Observable<Inmueble[]>{

    return this._http.get<Inmueble[]>(this.url + "inmuebles/" + tipo + "/" + poblacion + "/" + operacion);
   }


  addInmueble(inmueble:Inmueble):Observable<Inmueble>{

      return this._http.post<Inmueble>(this.url + "inmueble",inmueble);
    }


    updateInmueble(inmueble:Inmueble):Observable<Inmueble>{

      return this._http.put<Inmueble>(this.url + "inmueble",inmueble);

    }



}
