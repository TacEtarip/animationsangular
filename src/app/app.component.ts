import { Component, ViewChild } from '@angular/core';
import { ElementoDeListaComponent } from './elemento-de-lista/elemento-de-lista.component';
import { fader } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  //@ViewChild(ElementoDeListaComponent, { static: false }) elemento: ElementoDeListaComponent;

  listaDeEjemplo = [
    'Hola como estas',
    'Bien',
    'Y TU?'
  ];

  borrarElemento(mensaje: boolean) {

    console.log(mensaje);
    /*const index = this.listaDeEjemplo.indexOf(mensaje);
    this.listaDeEjemplo.splice(index, 1);*/
  }
}


