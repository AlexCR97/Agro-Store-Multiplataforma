import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-correo',
  templateUrl: './actualizar-correo.page.html',
  styleUrls: ['./actualizar-correo.page.scss'],
})
export class ActualizarCorreoPage implements OnInit {

  constructor(
    private nav: NavController,
  ) { }

  ngOnInit() { }

  actualizarCorreo() {
    this.nav.back();
  }

}
