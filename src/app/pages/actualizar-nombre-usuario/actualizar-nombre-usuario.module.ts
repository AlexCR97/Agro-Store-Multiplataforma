import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarNombreUsuarioPageRoutingModule } from './actualizar-nombre-usuario-routing.module';

import { ActualizarNombreUsuarioPage } from './actualizar-nombre-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarNombreUsuarioPageRoutingModule
  ],
  declarations: [ActualizarNombreUsuarioPage]
})
export class ActualizarNombreUsuarioPageModule {}
