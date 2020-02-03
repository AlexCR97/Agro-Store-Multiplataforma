import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.page.html',
  styleUrls: ['./resultados-busqueda.page.scss'],
})
export class ResultadosBusquedaPage implements OnInit {

  private productos = GeneralService.products;

  constructor() { }

  ngOnInit() { }

  onSearch(event: any) {
    console.log('on search');
    console.log(event.target.value);
  }

}
