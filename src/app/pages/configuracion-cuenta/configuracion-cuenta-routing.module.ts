import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionCuentaPage } from './configuracion-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionCuentaPageRoutingModule {}
