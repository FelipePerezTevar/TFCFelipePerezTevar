import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../../services/producto.service";
import {Color, Medida, ProductoResponse} from "../../models/ProductoResponse";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.scss']
})
export class ProductoDetailComponent implements OnInit{

  product : number |undefined

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


  constructor(private productoService: ProductoService, private route: ActivatedRoute, private routeError: Router) {
  }

  ngOnInit(): void {
    this.getIdProducto();
    this.getProducto();

  }

  private getIdProducto(){
    this.route.queryParams.subscribe(
      params => {
        this.product = +params['valor'];
      }
    )
  }

  private getProducto(){
    this.productoService.getProductosDetalle(this.product!).subscribe({
      next: value => {
        if(value && value.length > 0){
          this.productoResponse = value;
          this.arregloProducto();
        }else{
          this.routeError.navigate(['**']);
        }


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
