import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-buscar',
  templateUrl: './modal-buscar.page.html',
  styleUrls: ['./modal-buscar.page.scss'],
})
export class ModalBuscarPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    ) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

  onSearch(event: any) {
    var searchText = event.target.value;
    console.log(searchText);

    this.dismiss();
    this.router.navigateByUrl('/resultados-busqueda');
  }

}
