import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCarritoPageRoutingModule } from './tab-carrito-routing.module';

import { TabCarritoPage } from './tab-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCarritoPageRoutingModule
  ],
  declarations: [TabCarritoPage]
})
export class TabCarritoPageModule {}
