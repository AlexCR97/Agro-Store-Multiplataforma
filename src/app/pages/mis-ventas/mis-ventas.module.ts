import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisVentasPageRoutingModule } from './mis-ventas-routing.module';

import { MisVentasPage } from './mis-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisVentasPageRoutingModule
  ],
  declarations: [MisVentasPage]
})
export class MisVentasPageModule {}
