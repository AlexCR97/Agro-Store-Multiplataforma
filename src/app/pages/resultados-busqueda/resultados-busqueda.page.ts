import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-service';
import { ModalController } from '@ionic/angular';
import { ModalBuscarPage } from 'src/app/modals/modal-buscar/modal-buscar.page';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.page.html',
  styleUrls: ['./resultados-busqueda.page.scss'],
})
export class ResultadosBusquedaPage implements OnInit {

  private productos = GeneralService.products;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    var searchBar = document.getElementById('searchBarResultados');
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
