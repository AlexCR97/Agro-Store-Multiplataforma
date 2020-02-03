import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBuscarPage } from 'src/app/modals/modal-buscar/modal-buscar.page';

@Component({
  selector: 'app-tab-buscar',
  templateUrl: './tab-buscar.page.html',
  styleUrls: ['./tab-buscar.page.scss'],
})
export class TabBuscarPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    var searchBar = document.querySelector('ion-searchbar');
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
