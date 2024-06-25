import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutentificacionComponent } from './modules/autentificacion/autentificacion.component';
import { PagesComponent } from './modules/autentificacion/pages/pages.component';
import { ModelsComponent } from './models/models.component';
import { IniciosesionComponent } from './autentificacion/pages/iniciosesion/iniciosesion.component';

@NgModule({
  declarations: [
    AppComponent,
    AutentificacionComponent,
    PagesComponent,
    ModelsComponent,
    IniciosesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
