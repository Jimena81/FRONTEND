import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTipoComponent } from './components/list-tipo/list-tipo.component';
import { AddTipoComponent } from './components/add-tipo/add-tipo.component';
import { EditTipoComponent } from './components/edit-tipo/edit-tipo.component';
import { ListProvinciaComponent } from './components/list-provincia/list-provincia.component';
import { AddProvinciaComponent } from './components/add-provincia/add-provincia.component';
import { EditProvinciaComponent } from './components/edit-provincia/edit-provincia.component';
import { ListPoblacionComponent } from './components/list-poblacion/list-poblacion.component';
import { AddPoblacionComponent } from './components/add-poblacion/add-poblacion.component';
import { EditPoblacionComponent } from './components/edit-poblacion/edit-poblacion.component';
import { ListInmuebleComponent } from './components/list-inmueble/list-inmueble.component';
import { AddInmuebleComponent } from './components/add-inmueble/add-inmueble.component';
import { EditInmuebleComponent } from './components/edit-inmueble/edit-inmueble.component';
import { AddImagenComponent } from './components/add-imagen/add-imagen.component';
import { DetailInmuebleComponent } from './components/detail-inmueble/detail-inmueble.component';
import { ListFinderComponent } from './components/list-finder/list-finder.component';
import { adminGuard } from './guards/admin.guard';
import { LoginComponent } from './components/login/login.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './components/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';


const routes: Routes = [

{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"list-tipo",component:ListTipoComponent, canActivate:[adminGuard]},
{path:"list-provincia",component:ListProvinciaComponent, canActivate:[adminGuard]},
{path:"list-poblacion",component:ListPoblacionComponent, canActivate:[adminGuard]},
{path:"list-inmueble",component:ListInmuebleComponent, canActivate:[adminGuard]},
{path:"list-usuario",component:ListUsuarioComponent, canActivate:[adminGuard]},
{path:"list-finder/:ti/:po/:op",component:ListFinderComponent},
{path:"add-tipo",component:AddTipoComponent, canActivate:[adminGuard]},
{path:"add-provincia",component:AddProvinciaComponent, canActivate:[adminGuard]},
{path:"add-poblacion",component:AddPoblacionComponent, canActivate:[adminGuard]},
{path:"add-inmueble",component:AddInmuebleComponent, canActivate:[adminGuard]},
{path:"add-imagen/:id",component:AddImagenComponent, canActivate:[adminGuard]},
{path:"add-usuario",component:AddUsuarioComponent},
{path:"edit-tipo/:id",component:EditTipoComponent, canActivate:[adminGuard]},
{path:"edit-provincia/:id",component:EditProvinciaComponent, canActivate:[adminGuard]},
{path:"edit-poblacion/:id",component:EditPoblacionComponent, canActivate:[adminGuard]},
{path:"edit-inmueble/:id",component:EditInmuebleComponent, canActivate:[adminGuard]},
{path:"edit-usuario/:id",component:EditUsuarioComponent, canActivate:[adminGuard]},
{path:"detail-inmueble/:id",component:DetailInmuebleComponent},
{path:"login",component:LoginComponent},




{path:"error",component:ErrorComponent},


{path:"**",component:ErrorComponent}//siempre ultima fila!!!!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
