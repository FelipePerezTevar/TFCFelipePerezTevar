import {Component, OnInit} from '@angular/core';
import {Productocolor, ProductoResponse} from "../../models/ProductoResponse";
import {ProductoService} from "../../services/producto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{

  productocolor: ProductoResponse = [];

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit(): void {
    this.traerProductos();
  }

  private traerProductos(){
    this.productoService.getProductos().subscribe({
      next: value => {
        if(value){
          this.productocolor = value;
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  navegarADetalle($event: number){
    this.productoService.productoId = $event;
    this.router.navigate(['detalle']);
  }

}
