import {Component, OnInit} from '@angular/core';
import {Medida, Modelo, Productocolor, ProductoResponse, Tipo} from "../../models/ProductoResponse";
import {ProductoService} from "../../services/producto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{

  response: ProductoResponse = [];
  productocolors: Productocolor[] = [];

  tipoList: Tipo[] = [];

  modeloList: Modelo[] = [];

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit(): void {
    this.traerProductos();
    this.traerTipo();
    this.traerModelo();
  }

  private traerProductos(){
    this.productoService.getProductos().subscribe({
      next: value => {
        if(value){
          this.response = value;
/*
          let igual = false;

          for(let i = 0; i < this.response.length; i++) {

            if(this.productocolors.length == 0){
              this.productocolors.push(this.response[i]);
            }

            for(let j = 0; j < this.productocolors.length; j++){

              if(this.productocolors[j].producto.tipo.descripcion == this.response[i].producto.tipo.descripcion &&
                this.productocolors[j].producto.modelo.nombre == this.response[i].producto.modelo.nombre){
                igual = true;
              }
            }

            if(igual == false){
              this.productocolors.push(this.response[i]);
            }

          }
*/
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  private traerTipo(){

    this.productoService.getTipo().subscribe({
      next: value => {
        this.tipoList = value;
      },
      error: err => {
        console.log(err);
      }
    })

  }

  private traerModelo(){

    this.productoService.getModelo().subscribe({
      next: value => {
        this.modeloList = value;
      },
      error: err => {console.log(err);}
    })

  }


  navegarADetalle($event: number){
    this.productoService.productoId = $event;
    this.router.navigate(['detalle']);
  }

  anyadirFiltro() {

  }
}
