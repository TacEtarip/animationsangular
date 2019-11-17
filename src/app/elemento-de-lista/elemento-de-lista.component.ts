import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { fader, changeAtState } from '../animations';

@Component({
  selector: 'app-elemento-de-lista',
  templateUrl: './elemento-de-lista.component.html',
  styleUrls: ['./elemento-de-lista.component.scss'],
  animations: [fader, changeAtState]
})
export class ElementoDeListaComponent implements OnInit {
  @Input() elementoDeLista;
  @Output() delete = new EventEmitter();

  isNormal = true;

  constructor() { }

  ngOnInit() {
  }

  deleteElement() {

    this.isNormal = !this.isNormal;

    this.delete.emit(this.isNormal);
  }

}
