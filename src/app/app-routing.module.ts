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

const routes: Routes = [

{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"list-tipo",component:ListTipoComponent},
{path:"list-provincia",component:ListProvinciaComponent},
{path:"list-poblacion",component:ListPoblacionComponent},
{path:"add-tipo",component:AddTipoComponent},
{path:"add-provincia",component:AddProvinciaComponent},
{path:"add-poblacion",component:AddPoblacionComponent},
{path:"edit-tipo/:id",component:EditTipoComponent},
{path:"edit-provincia/:id",component:EditProvinciaComponent},
{path:"edit-poblacion/:id",component:EditPoblacionComponent},






{path:"error",component:ErrorComponent},


{path:"**",component:ErrorComponent}//siempre ultima fila!!!!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
