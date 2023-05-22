import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {

  options: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      }
    }
  }

  slidesStoreProductos = [{
    id: 1,
    src: "../../../assets/imagenes/carousel-productos/colage1.jpg",
    alt: "Producto1"
  },{
    id: 2,
    src: "../../../assets/imagenes/carousel-productos/colage2.jpg",
    alt: "Producto2"
  },{
    id: 3,
    src: "../../../assets/imagenes/carousel-productos/colage3.jpg",
    alt: "Producto3"
  },]

  slidesStoreQuienes = [{
    id: 1,
    src: "../../../assets/imagenes/carousel-quienes/fachada.jpg",
    alt: "Quienes1"
  },{
    id: 2,
    src: "../../../assets/imagenes/carousel-quienes/horno.jpg",
    alt: "Quienes2"
  },{
    id: 3,
    src: "../../../assets/imagenes/carousel-quienes/almacen.jpg",
    alt: "Quienes3"
  },]

  constructor(private router: Router) {
  }

  navegar(contacto: string) {
      this.router.navigate([contacto]);
  }
}
