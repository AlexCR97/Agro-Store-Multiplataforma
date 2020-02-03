import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReputacionPage } from './reputacion.page';

const routes: Routes = [
  {
    path: '',
    component: ReputacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReputacionPageRoutingModule {}
