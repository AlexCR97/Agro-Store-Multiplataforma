import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosBusquedaPage } from './resultados-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosBusquedaPageRoutingModule {}
