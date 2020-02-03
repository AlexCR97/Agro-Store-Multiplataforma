import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBuscarPage } from './modal-buscar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBuscarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBuscarPageRoutingModule {}
