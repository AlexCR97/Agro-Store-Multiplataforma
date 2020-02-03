import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-mis-datos',
  templateUrl: './actualizar-mis-datos.page.html',
  styleUrls: ['./actualizar-mis-datos.page.scss'],
})
export class ActualizarMisDatosPage implements OnInit {

  constructor(
    private nav: NavController,
  ) { }

  ngOnInit() { }

  actualizarDatos() {
    this.nav.back();
  }

}
