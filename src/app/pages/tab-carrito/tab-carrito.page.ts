import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-service';

@Component({
  selector: 'app-tab-carrito',
  templateUrl: './tab-carrito.page.html',
  styleUrls: ['./tab-carrito.page.scss'],
})
export class TabCarritoPage implements OnInit {

  private products = GeneralService.products;

  constructor() { }

  ngOnInit() {
  }

}
