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

const routes: Routes = [

{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"list-tipo",component:ListTipoComponent},
{path:"list-provincia",component:ListProvinciaComponent},
{path:"add-tipo",component:AddTipoComponent},
{path:"add-provincia",component:AddProvinciaComponent},
{path:"edit-tipo/:id",component:EditTipoComponent},
{path:"edit-provincia/:id",component:EditProvinciaComponent},







{path:"error",component:ErrorComponent},


{path:"**",component:ErrorComponent}//siempre ultima fila!!!!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
