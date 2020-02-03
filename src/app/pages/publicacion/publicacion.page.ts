import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-service';
import { ModalController } from '@ionic/angular';
import { ModalBuscarPage } from 'src/app/modals/modal-buscar/modal-buscar.page';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

  private producto = GeneralService.products[0];
  private comentarios = [ 1, 2, 3, 4, 5, 6, ];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    var searchBar = document.getElementById('searchBarPublicacion');
    searchBar.addEventListener('ionFocus', (event) => this.onFocus(event));
  }

  async onFocus(event: any) {
    console.log('focus');

    const modal = await this.modalController.create({
      component: ModalBuscarPage,
    });

    await modal.present();
  }

}
