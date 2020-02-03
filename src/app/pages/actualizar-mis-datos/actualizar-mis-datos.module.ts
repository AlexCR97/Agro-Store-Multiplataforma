import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarMisDatosPageRoutingModule } from './actualizar-mis-datos-routing.module';

import { ActualizarMisDatosPage } from './actualizar-mis-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarMisDatosPageRoutingModule
  ],
  declarations: [ActualizarMisDatosPage]
})
export class ActualizarMisDatosPageModule {}
