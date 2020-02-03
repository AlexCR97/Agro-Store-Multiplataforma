import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-registro',
  templateUrl: './post-registro.page.html',
  styleUrls: ['./post-registro.page.scss'],
})
export class PostRegistroPage implements OnInit {

  private segments = {
    segment1: 'Nombre de usuario',
    segment2: 'Datos personales',
    segment3: 'Domicilio',
  };

  private currentSegment = this.segments['segment1'];

  constructor() { }

  ngOnInit() { }

  segmentChanged(event: any) {
    var segmentId = event.detail.value;
    this.currentSegment = this.segments[segmentId];
  }

}
