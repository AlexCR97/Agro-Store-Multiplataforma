import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reputacion',
  templateUrl: './reputacion.page.html',
  styleUrls: ['./reputacion.page.scss'],
})
export class ReputacionPage implements OnInit {

  private historialCalificaciones = [
    {
      fecha: '30 de enero de 2020',
      calificacion: 3.5,
    },
    {
      fecha: '27 de enero de 2020',
      calificacion: 4.0,
    },
    {
      fecha: '20 de enero de 2020',
      calificacion: 3.0,
    },
    {
      fecha: '19 de enero de 2020',
      calificacion: 4.9,
    },
    {
      fecha: '16 de enero de 2020',
      calificacion: 4.1,
    },
    {
      fecha: '4 de enero de 2020',
      calificacion: 3.9,
    },
    {
      fecha: '30 de enero de 2020',
      calificacion: 3.5,
    },
    {
      fecha: '27 de enero de 2020',
      calificacion: 4.0,
    },
    {
      fecha: '20 de enero de 2020',
      calificacion: 3.0,
    },
    {
      fecha: '19 de enero de 2020',
      calificacion: 4.9,
    },
    {
      fecha: '16 de enero de 2020',
      calificacion: 4.1,
    },
    {
      fecha: '4 de enero de 2020',
      calificacion: 3.9,
    },
  ];

  constructor() { }

  ngOnInit() { }

}
