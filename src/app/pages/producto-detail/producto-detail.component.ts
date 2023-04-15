import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../../services/producto.service";
import {Color, Imagen, Medida, Producto, ProductoResponse} from "../../models/ProductoResponse";

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.scss']
})
export class ProductoDetailComponent implements OnInit{

  productoResponse: ProductoResponse = [];

  referencia: String |undefined;

  modelo: String | undefined;

  tipo: String | undefined;

  Imedida: number = 0;

  Icolor: number = 0;

  precio: number[] = [];
  colores: Color[] = [];
  imagenes: String[] = [];

  medidas: Medida[] = [];


  constructor(private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.getProducto();

  }

  private getProducto(){
    this.productoService.getProductosDetalle().subscribe({
      next: value => {
        this.productoResponse = value;
        this.arregloProducto();

      },
      error: err => {
        console.log(err);
      }
    })
  }

  private arregloProducto(){

    this.referencia = this.productoResponse[0].producto.referencia;
    this.tipo = this.productoResponse[0].producto.tipo.descripcion;
    this.modelo = this.productoResponse[0].producto.modelo.nombre;
    this.medidas = this.productoResponse[0].producto.medidas;

    for(let i = 0; i <this.medidas.length; i++){
      this.precio.push(this.medidas[i].precio);
    }

    for (let i = 0; i < this.productoResponse.length; i++){
      this.colores.push(this.productoResponse[i].color);
      this.imagenes.push(this.productoResponse[i].imagen.url);
    }

  }

}
