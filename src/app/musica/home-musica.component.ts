import { Component } from '@angular/core';
import { IRegistrazione } from '../lista-musica';
import { MUSICA } from './lista-musica.component';

@Component({
  selector: 'app-musica',
  templateUrl: './musica-html.component.html',
  styleUrls: ['./musica.component.css'],
})
export class MusicaComponent {
  registrazione = MUSICA;
  imm: boolean = false;
  musicaSel?:IRegistrazione

  mostraImmagine() {
    this.imm = !this.imm;
    if (this.imm) {
      document.getElementById('b').innerHTML = 'Nacondi immagini';
    } else {
      document.getElementById('b').innerHTML = 'Mostra immagini';
    }
  }
}
