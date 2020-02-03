import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarNombreUsuarioPage } from './actualizar-nombre-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarNombreUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarNombreUsuarioPageRoutingModule {}
