import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {

  private ventas = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
