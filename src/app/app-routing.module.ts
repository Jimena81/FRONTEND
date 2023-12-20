import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTipoComponent } from './components/list-tipo/list-tipo.component';

const routes: Routes = [

{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"list-tipo",component:ListTipoComponent},
{path:"error",component:ErrorComponent},


{path:"**",component:ErrorComponent}//siempre ultima fila!!!!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
