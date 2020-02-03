import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisVentasPage } from './mis-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: MisVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisVentasPageRoutingModule {}
