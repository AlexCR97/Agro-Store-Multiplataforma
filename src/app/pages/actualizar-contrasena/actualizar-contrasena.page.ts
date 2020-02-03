import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.page.html',
  styleUrls: ['./actualizar-contrasena.page.scss'],
})
export class ActualizarContrasenaPage implements OnInit {

  constructor(
    private nav: NavController,
  ) { }

  ngOnInit() { }

  actualizarContrasena() {
    this.nav.back();
  }

}
