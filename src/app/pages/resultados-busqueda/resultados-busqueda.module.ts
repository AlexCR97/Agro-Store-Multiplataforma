import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosBusquedaPageRoutingModule } from './resultados-busqueda-routing.module';

import { ResultadosBusquedaPage } from './resultados-busqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosBusquedaPageRoutingModule
  ],
  declarations: [ResultadosBusquedaPage]
})
export class ResultadosBusquedaPageModule {}
