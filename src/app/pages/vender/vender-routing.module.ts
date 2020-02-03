import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenderPage } from './vender.page';

const routes: Routes = [
  {
    path: '',
    component: VenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenderPageRoutingModule {}
