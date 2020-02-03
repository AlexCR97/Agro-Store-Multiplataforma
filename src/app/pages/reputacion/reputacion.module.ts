import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReputacionPageRoutingModule } from './reputacion-routing.module';

import { ReputacionPage } from './reputacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReputacionPageRoutingModule
  ],
  declarations: [ReputacionPage]
})
export class ReputacionPageModule {}
