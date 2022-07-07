import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input()imagen? = "assets/viajes/newyork.jpg";
  @Input()categoria: string | undefined;
  @Input()titulo: string | undefined;
  @Input()contenido: string | undefined;
  @Input()destacado = false;
  @Input()precio: number | undefined;

  numeros = [1, 2, 3, 4, 5, 6, 7];

  ngOnInit(): void {
  }

}
