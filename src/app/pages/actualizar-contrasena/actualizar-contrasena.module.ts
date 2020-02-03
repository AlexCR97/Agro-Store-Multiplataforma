import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarContrasenaPageRoutingModule } from './actualizar-contrasena-routing.module';

import { ActualizarContrasenaPage } from './actualizar-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarContrasenaPageRoutingModule
  ],
  declarations: [ActualizarContrasenaPage]
})
export class ActualizarContrasenaPageModule {}
