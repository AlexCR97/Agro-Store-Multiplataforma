import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarContrasenaPage } from './actualizar-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarContrasenaPageRoutingModule {}
