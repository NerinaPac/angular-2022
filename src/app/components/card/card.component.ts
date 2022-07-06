import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  imagen = "assets/viajes/newyork.jpg";
  categoria = "Paquete";
  titulo = "New York";
  contenido = "lorem blah";
  destacado = true;
  precio = 5000;

  ngOnInit(): void {
  }

}
