import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
//Importamos el servicio de gatitos
import { GatitosService } from 'src/app/services/gatitos.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})

/* export interface InfoGatitos {
  fact: string;
  length: number;
} */

export class NosotrosComponent implements OnInit {

  constructor(
    private gatitosService: GatitosService
  ) { }

    data: any;

  mostrarInfoGatitos () {
    this.gatitosService.getGatitosInfo().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
// inInit significa cuando se termina a cargar el componente.
// Un estado de la pagina. Cuando termina y esta listo para usarse.
  ngOnInit(): void {
    this.mostrarInfoGatitos();
  }

}
