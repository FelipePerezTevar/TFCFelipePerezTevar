import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Productocolor} from "../../../models/ProductoResponse";

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent {

  @Input() productocolor?: Productocolor;
  @Input() medida?: number;


  @Output() clickDetalle: EventEmitter<number> = new EventEmitter<number>();

  irADetalle(){
    this.clickDetalle.emit(this.productocolor?.producto.id);
  }

}
