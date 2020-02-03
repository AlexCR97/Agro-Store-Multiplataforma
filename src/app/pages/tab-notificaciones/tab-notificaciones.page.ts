import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-notificaciones',
  templateUrl: './tab-notificaciones.page.html',
  styleUrls: ['./tab-notificaciones.page.scss'],
})
export class TabNotificacionesPage implements OnInit {

  private notificaciones = [ 1, 2, 3, 4, 5, 6, 7,  ];

  constructor() { }

  ngOnInit() {
  }

}
