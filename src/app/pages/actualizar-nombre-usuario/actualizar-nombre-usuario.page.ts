import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-nombre-usuario',
  templateUrl: './actualizar-nombre-usuario.page.html',
  styleUrls: ['./actualizar-nombre-usuario.page.scss'],
})
export class ActualizarNombreUsuarioPage implements OnInit {

  constructor(
    private nav: NavController,
  ) { }

  ngOnInit() { }

  actualizarNombreUsuario() {
    this.nav.back();
  }

}
