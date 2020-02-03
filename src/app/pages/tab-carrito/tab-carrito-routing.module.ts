import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCarritoPage } from './tab-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: TabCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCarritoPageRoutingModule {}
