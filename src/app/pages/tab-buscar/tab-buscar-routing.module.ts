import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBuscarPage } from './tab-buscar.page';

const routes: Routes = [
  {
    path: '',
    component: TabBuscarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBuscarPageRoutingModule {}
