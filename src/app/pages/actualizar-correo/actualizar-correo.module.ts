import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarCorreoPageRoutingModule } from './actualizar-correo-routing.module';

import { ActualizarCorreoPage } from './actualizar-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarCorreoPageRoutingModule
  ],
  declarations: [ActualizarCorreoPage]
})
export class ActualizarCorreoPageModule {}
