import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBuscarPageRoutingModule } from './modal-buscar-routing.module';

import { ModalBuscarPage } from './modal-buscar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBuscarPageRoutingModule
  ],
  declarations: [ModalBuscarPage]
})
export class ModalBuscarPageModule {}
