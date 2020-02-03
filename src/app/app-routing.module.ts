import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'post-registro',
    loadChildren: () => import('./pages/post-registro/post-registro.module').then( m => m.PostRegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'tab-inicio',
    loadChildren: () => import('./pages/tab-inicio/tab-inicio.module').then( m => m.TabInicioPageModule)
  },
  {
    path: 'tab-buscar',
    loadChildren: () => import('./pages/tab-buscar/tab-buscar.module').then( m => m.TabBuscarPageModule)
  },
  {
    path: 'tab-carrito',
    loadChildren: () => import('./pages/tab-carrito/tab-carrito.module').then( m => m.TabCarritoPageModule)
  },
  {
    path: 'tab-notificaciones',
    loadChildren: () => import('./pages/tab-notificaciones/tab-notificaciones.module').then( m => m.TabNotificacionesPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./pages/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'mis-compras',
    loadChildren: () => import('./pages/mis-compras/mis-compras.module').then( m => m.MisComprasPageModule)
  },
  {
    path: 'mis-ventas',
    loadChildren: () => import('./pages/mis-ventas/mis-ventas.module').then( m => m.MisVentasPageModule)
  },
  {
    path: 'vender',
    loadChildren: () => import('./pages/vender/vender.module').then( m => m.VenderPageModule)
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
  },
  {
    path: 'actualizar-mis-datos',
    loadChildren: () => import('./pages/actualizar-mis-datos/actualizar-mis-datos.module').then( m => m.ActualizarMisDatosPageModule)
  },
  {
    path: 'configuracion-cuenta',
    loadChildren: () => import('./pages/configuracion-cuenta/configuracion-cuenta.module').then( m => m.ConfiguracionCuentaPageModule)
  },
  {
    path: 'actualizar-nombre-usuario',
    loadChildren: () => import('./pages/actualizar-nombre-usuario/actualizar-nombre-usuario.module').then( m => m.ActualizarNombreUsuarioPageModule)
  },
  {
    path: 'actualizar-correo',
    loadChildren: () => import('./pages/actualizar-correo/actualizar-correo.module').then( m => m.ActualizarCorreoPageModule)
  },
  {
    path: 'actualizar-contrasena',
    loadChildren: () => import('./pages/actualizar-contrasena/actualizar-contrasena.module').then( m => m.ActualizarContrasenaPageModule)
  },
  {
    path: 'reputacion',
    loadChildren: () => import('./pages/reputacion/reputacion.module').then( m => m.ReputacionPageModule)
  },
  {
    path: 'modal-buscar',
    loadChildren: () => import('./modals/modal-buscar/modal-buscar.module').then( m => m.ModalBuscarPageModule)
  },
  {
    path: 'resultados-busqueda',
    loadChildren: () => import('./pages/resultados-busqueda/resultados-busqueda.module').then( m => m.ResultadosBusquedaPageModule)
  },
  {
    path: 'publicacion',
    loadChildren: () => import('./pages/publicacion/publicacion.module').then( m => m.PublicacionPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./pages/compra/compra.module').then( m => m.CompraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
