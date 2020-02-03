import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionCuentaPageRoutingModule } from './configuracion-cuenta-routing.module';

import { ConfiguracionCuentaPage } from './configuracion-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionCuentaPageRoutingModule
  ],
  declarations: [ConfiguracionCuentaPage]
})
export class ConfiguracionCuentaPageModule {}
