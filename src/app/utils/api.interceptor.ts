

// import { Injectable } from "@angular/core";
// import { HttpEvent,
//           HttpHandler,
//           HttpInterceptor,
//           HttpRequest,
//           HttpErrorResponse } from "@angular/common/http";


// import { Observable } from "rxjs";
// import { AuthService } from "../services/auth.service";

// @Injectable()
// export class ApiInterceptor implements HttpInterceptor{

//   requestCloned:any;
//   requestFinal: Observable<HttpEvent<any>>;

// constructor(

//   private _authService:AuthService,

// ){}


//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//       const token = this._authService.getToken();

//       if(token){
//         //hay que clonear el req porque es un obj inmutable y no se puede añadir, modificar su
//         //contenido del token
//         //asi que hay que hacer una copia del req y asi se puede modificar
//         //y creamos una nueva respuesta con el token incluído para enviarlo
//         //a la API
//         this.requestCloned = req.clone({
//           headers:req.headers//incluímos lo que había en la req
//             .set("Authorization", "Bearer" + token)
//         });

//         this.requestFinal = next.handle(this.requestCloned);
//       }else{
//         this.requestFinal = next.handle(req);

//       }

//        return this.requestFinal;

//   }



// }

import { Injectable } from "@angular/core";
import { HttpEvent,
          HttpHandler,
          HttpInterceptor,
          HttpRequest,
          HttpErrorResponse } from "@angular/common/http";


import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor{

  requestCloned:any;
  requestFinal:Observable<HttpEvent<any>>;

  constructor(
    private _authService:AuthService
  ){}



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this._authService.getToken();

    if(token){//SI HAY TOKEN...

      //Tenemos que clonar el req (request) porque es un objeto inmutable y por lo tanto
      //no podemos añadir (modificar) el token
      //Para conseguirlo, hacemos una copia exacta del objeto req y creamos una nueva req (requestCloned)
      //con el token incluído para enviarlo a la API
      this.requestCloned = req.clone({
        headers:req.headers  //incluimos lo que ya había en la req
        .set("Authorization","Bearer " + token)
      });

      this.requestFinal = next.handle(this.requestCloned);

    }else{

      this.requestFinal = next.handle(req);

    }


    return this.requestFinal;


      /* this.requestFinal = next.handle(req);

      return this.requestFinal; */

  }



}

