import { Injectable } from '@angular/core';
import { URL_BASE } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = URL_BASE;

  constructor(

    private _http:HttpClient,


  ) { }

  
  logIn(){

  }
  logOut(){

  }
//este método controla si el usuario está logueado(existe token) o no
  isLoggedIn():boolean{

    return true;
  }

  getToken(){

  }

  loadTokenFromLocalStorage(){

  }

  getUsuario(){

  }

  getRol(){

  }




}
