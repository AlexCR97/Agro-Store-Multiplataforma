import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private navController: NavController,
  ) { }

  ngOnInit() { }

  async cerrarSesion() {
    console.log('Cerrar sesion');

    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que quieres cerrar sesión?',
      buttons: [
        'No',
        {
          text: 'Si',
          handler: () => {
            this.navController.back();
          }
        },
      ],
    });

    await alert.present();
  }

}
