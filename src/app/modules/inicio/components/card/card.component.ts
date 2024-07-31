import { Component } from '@angular/core';
import { Prods } from 'src/app/models/prods';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Prods[];
  constructor() {
    this.info = [
      {
        imagen: "https://ar.isadoraonline.com/media/wysiwyg/AW20_BLOQUE_BEAUTY_DESK-100_1.jpg",
        nombre: "Beauty"
      },
      {
        imagen: "https://ar.isadoraonline.com/media/wysiwyg/AW20_BLOQUE_PELO_DESK-100_2.jpg",
        nombre: "Accesorios",
      },
      {
        imagen: "https://ar.isadoraonline.com/media/wysiwyg/AW20_BLOQUE_BIJOU_DESK-100_3.jpg",
        nombre: "Bijou"
      },
      {
        imagen: "https://ar.isadoraonline.com/media/wysiwyg/AW20_BLOQUE_ESCRITORIO_DESK-100_3.jpg",
        nombre: "Escritorio"
      }
    ]
  }



}
