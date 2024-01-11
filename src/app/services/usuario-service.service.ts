import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/entity';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  url:string= GLOBAL.url;


  constructor(
    private _http:HttpClient
  ) { }

  getUsuarios():Observable<Usuario[]>{

    return this._http.get<Usuario[]>(this.url + "usuarios");
   }

   addUsuario(usuario:Usuario):Observable<Usuario>{

    return this._http.post<Usuario>(this.url + "usuario",usuario);
  }

    getUsuario(id:number):Observable<Usuario>{

      return this._http.get<Usuario>(this.url + "usuario/" + id);
    }

    updateUsuario(usuario:Usuario):Observable<Usuario>{

      return this._http.put<Usuario>(this.url + "usuario",usuario);

    }
}
