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

   addInmueble(inmueble:Inmueble):Observable<Inmueble>{

    return this._http.post<Inmueble>(this.url + "inmueble",inmueble);
  }

    getInmueble(id:number):Observable<Inmueble>{

      return this._http.get<Inmueble>(this.url + "inmueble/" + id);
    }

    updateInmueble(inmueble:Inmueble):Observable<Inmueble>{

      return this._http.put<Inmueble>(this.url + "inmueble",inmueble);

    }
}
