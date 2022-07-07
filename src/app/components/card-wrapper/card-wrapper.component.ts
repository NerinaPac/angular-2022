import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor() { }

  imagen = "";
  categoria = "Vuelos";
  titulo = "Viaja a New York";
  contenido = "Lorem ipsum";
  destacado = false;
  precio = 5500;
 

  ngOnInit(): void {
  }

}
