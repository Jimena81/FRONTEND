import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/entity';
import { AuthService } from '../../services/auth.service';
import { CommunicationService } from '../../services/communication.service';
import { UsuarioService } from '../../services/usuario.service';

/* No olvidar importar en AppModule el modulo ReactiveFormsModule */

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrl: './edit-usuario.component.css'
})
export class EditUsuarioComponent {

    rol:string;
    /////////////////////////////////////////////////
    nFases:number=1;
    cargaCompletada:boolean=false;
    fasesCargadas:number=0;
    /////////////////////////////////////////////////

    id:number;

    usuario:Usuario={

      email:'',
      password:'',
      user:'',
      activo:1

    }


    registerForm = new FormGroup({

      elEmail: new FormControl(this.usuario.email,[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]) /* REGEX */
      ,

      elUsuario: new FormControl(this.usuario.user, [Validators.required])

    });

    constructor(
      private _usuarioService:UsuarioService,
      private _authService:AuthService,
      private _route:ActivatedRoute,
      private _router:Router,
      private _communicationService:CommunicationService
    ){}



    ngOnInit(): void {
      this._communicationService.cambioPortada(false);
      this._communicationService.cambioFooter(false);
      this.getDatos();
    }


    getDatos():void{


      //El primer dato que necesito es es id de la ruta, porque sin él no podemos
      //acceder a los atributos del abjeto a modificar
      this._route.params.subscribe({

        next:(params)=>{
          this.id=params['id'];

        }
        ,
        error:(error)=>{this._router.navigate(["/error"])}

      });//NO TIENE COMPLETE


      //Ya tenemos el id. Con él llamamos a la API para conseguir los datos y poderlos mapear

      this._usuarioService.getUsuario(this.id).subscribe({

        next: (datos)=>{

          //Mapeamos los datos en la interface tipo preparada para ello
          this.usuario.email=datos.email;
          /* this.tipo.id= datos.id;
          this.tipo.nombre = datos.nombre.toUpperCase();
          this.tipo.activo= datos.activo; */ //Asigna el 1 como true y el 0 como false
        }
        ,
        error: (error)=>{this._router.navigate(["/error"])}
        ,
        complete: ()=>{this.faseCarga();}

      });

    }


    edit():void{

      /* this.tipo.activo = Number(this.tipo.activo);
      this.tipo.nombre = this.tipo.nombre.toUpperCase(); */

      this._usuarioService.updateUsuario(this.usuario).subscribe({

        next: (datos)=>{console.log(datos)}
        ,
        error:(error)=>{this._router.navigate(["/error"])}
        ,
        complete: ()=>{

          //Depende de quien esté utilizando el edit-usuario
          //Esta información la podemos sacar del authService
          //que controla el token. En él está el rol que necesitamos
          this.rol = this._authService.getRol();

          if(this.rol == "admin"){
            this._router.navigate(["/list-usuario"]);
          }else{
            this._router.navigate(["/home"]);
          }



        }
      });

    }

      ////////////////////////////////////////////////
      faseCarga():void{

        this.fasesCargadas++;
        if(this.fasesCargadas == this.nFases){
          this.cargaCompletada = true;
        }

      }
      ////////////////////////////////////////////////

}
