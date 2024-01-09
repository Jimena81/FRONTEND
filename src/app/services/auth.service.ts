import { Injectable } from '@angular/core';
import { URL_BASE } from './global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/entity';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = URL_BASE;
  token:any;

  constructor(

    private _http:HttpClient,


  ) { }


  logIn(credenciales:Credentials):Observable<any>{

    return this._http.post<any>(this.url + "authenticate", credenciales)

  }
  logOut():void{

    if(localStorage.getItem("token")){

      localStorage.removeItem("token");

    }
  }

//este método controla si el usuario está logueado(existe token) o no
  isLoggedIn():boolean{

   const helper = new JwtHelperService();
   const token = this.getToken();
//comprobamos que el token existe
   if(!token){
    return false;
   }else{
    try{
      helper.decodeToken(token);
    }catch(e){
      //si se produce un error significa que el token no es un jwt
      return false;
    }

    //si el token no existe o no es jwt no llega aqui

    //ahora comprobamos si está expirado

    const isExpired = helper.isTokenExpired(token);

    return !isExpired;



   }

  }

  getToken():string|null{

    return localStorage.getItem("token");


  }

  setTokenInLocalStorage(token:string):void{

    //si existe otro token o esté caducado, que lo borre
    if(localStorage.getItem("token")){
      localStorage.removeItem("token");
    }

    //una vez borrado, seteamos el nuevo
    localStorage.setItem("token", token);

  }

  getUsuario():string{

    this.token = this.getToken();
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    return decodedToken.usuario;


  }

  getRol():string{

    this.token = this.getToken();
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    let rol = decodedToken.ROLES.substring();

    if(rol=="ROLE_USER"){
      rol = "user";
    }else if(rol == "ROLE_ADMIN"){
      rol = "admin";
    }

    return rol;

  }




}
