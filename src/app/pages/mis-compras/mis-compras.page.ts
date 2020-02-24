import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.page.html',
  styleUrls: ['./mis-compras.page.scss'],
})
export class MisComprasPage implements OnInit {

  private compras = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() { }

}
