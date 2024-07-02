import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { HomeComponent } from './pages/home/home.component';

//componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarruselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ], exports:[
    CarruselComponent,
    InicioRoutingModule

  ]
})
export class InicioModule { }
