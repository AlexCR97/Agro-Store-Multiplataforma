import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'tab-inicio',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-inicio/tab-inicio.module').then(m => m.TabInicioPageModule)
          }
        ]
      },
      {
        path: 'tab-buscar',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-buscar/tab-buscar.module').then(m => m.TabBuscarPageModule)
          }
        ]
      },
      {
        path: 'tab-carrito',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-carrito/tab-carrito.module').then(m => m.TabCarritoPageModule)
          }
        ]
      },
      {
        path: 'tab-notificaciones',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-notificaciones/tab-notificaciones.module').then(m => m.TabNotificacionesPageModule)
          }
        ]
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
