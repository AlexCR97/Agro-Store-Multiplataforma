import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBuscarPageRoutingModule } from './tab-buscar-routing.module';

import { TabBuscarPage } from './tab-buscar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBuscarPageRoutingModule
  ],
  declarations: [TabBuscarPage]
})
export class TabBuscarPageModule {}
