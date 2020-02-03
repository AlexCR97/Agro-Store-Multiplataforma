import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisDatosPage } from './mis-datos.page';

const routes: Routes = [
  {
    path: '',
    component: MisDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisDatosPageRoutingModule {}
