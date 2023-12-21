import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poblacion } from '../models/entity';

@Injectable({
  providedIn: 'root'
})
export class PoblacionService {
  url:string= GLOBAL.url;

  constructor(
    private _http:HttpClient
  ) { }

  getPoblaciones():Observable<Poblacion[]>{

    return this._http.get<Poblacion[]>(this.url + "poblaciones");
   }

   addPoblacion(poblacion:Poblacion):Observable<Poblacion>{

    return this._http.post<Poblacion>(this.url + "poblacion",poblacion);
  }

    getPoblacion(id:number):Observable<Poblacion>{

      return this._http.get<Poblacion>(this.url + "poblacion/" + id);
    }

    updatePoblacion(poblacion:Poblacion):Observable<Poblacion>{

      return this._http.put<Poblacion>(this.url + "poblacion",poblacion);

    }






}
