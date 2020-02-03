import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostRegistroPageRoutingModule } from './post-registro-routing.module';

import { PostRegistroPage } from './post-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRegistroPageRoutingModule
  ],
  declarations: [PostRegistroPage]
})
export class PostRegistroPageModule {}
