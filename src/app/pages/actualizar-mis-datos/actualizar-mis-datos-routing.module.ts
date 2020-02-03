import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarMisDatosPage } from './actualizar-mis-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarMisDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarMisDatosPageRoutingModule {}
