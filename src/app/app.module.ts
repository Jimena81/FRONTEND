import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { CabeceraFooterComponent } from './components/cabecera-footer/cabecera-footer.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { PieFooterComponent } from './components/pie-footer/pie-footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ListHomeComponent } from './components/list-home/list-home.component';
import { ListTipoComponent } from './components/list-tipo/list-tipo.component';
import { AddTipoComponent } from './components/add-tipo/add-tipo.component';
import { EditTipoComponent } from './components/edit-tipo/edit-tipo.component';
import { ListProvinciaComponent } from './components/list-provincia/list-provincia.component';
import { AddProvinciaComponent } from './components/add-provincia/add-provincia.component';
import { EditProvinciaComponent } from './components/edit-provincia/edit-provincia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuPrincipalComponent,
    FooterComponent,
    CarouselHomeComponent,
    CabeceraFooterComponent,
    MenuFooterComponent,
    PieFooterComponent,
    HomeComponent,
    ErrorComponent,
    ListHomeComponent,
    ListTipoComponent,
    AddTipoComponent,
    EditTipoComponent,
    ListProvinciaComponent,
    AddProvinciaComponent,
    EditProvinciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
