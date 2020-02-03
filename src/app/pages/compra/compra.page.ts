import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  private products = [ 1, 2, 3, 4, 5, ];

  constructor() { }

  ngOnInit() {
  }

}
