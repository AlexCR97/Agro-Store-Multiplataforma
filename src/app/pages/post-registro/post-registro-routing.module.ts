import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostRegistroPage } from './post-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PostRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRegistroPageRoutingModule {}
