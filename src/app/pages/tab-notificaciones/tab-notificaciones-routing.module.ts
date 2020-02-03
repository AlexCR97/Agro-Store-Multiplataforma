import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNotificacionesPage } from './tab-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: TabNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNotificacionesPageRoutingModule {}
