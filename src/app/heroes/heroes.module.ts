import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesComponent } from './pages/heroe/heroe.component';
import { HeroesRoutingModule } from './heroesRouting.module';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { imagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroesComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    imagenPipe, 
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule,
    
  ]
})
export class HeroesModule { }
