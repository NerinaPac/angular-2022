import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor() { }

  viajes = [
    { 
      image: "assets/viajes/bariloche.webp",
      categoria: "Vuelos",
      titulo: "Viaja a Bariloche",      
      contenido: "Lorem ipsum",
      destacado: true,
      precio: 16500
     
    },
    { 
      image: "assets/viajes/islandia.jpg",
      categoria: "Vuelos",
      titulo: "Viaja a Islandia",
      contenido: "Lorem ipsum",
      destacado: false,
      precio: 90000
     
    },
    { 
      image: "assets/viajes/newyork.jpg",
      categoria: "Vuelos",
      titulo: "Viaja a New York",
      contenido: "Lorem ipsum",
      destacado: false,
      precio: 85000
     
    },
    { 
      image: "assets/viajes/tierrafuego.jpg",
      categoria: "Vuelos",
      titulo: "Viaja a Tierra del Fuego",
      contenido: "Lorem ipsum",
      destacado: true,
      precio: 14000
     
    }
  ]

  
 

  ngOnInit(): void {
  }

}
