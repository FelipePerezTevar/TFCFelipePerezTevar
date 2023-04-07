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

  slidesStore = [{
    id: 1,
    src: "../../../assets/imagenes/maceta1New.png",
    alt: "Maceta1"
  },{
    id: 2,
    src: "../../../assets/imagenes/maceta2New.png",
    alt: "Maceta2"
  },{
    id: 3,
    src: "../../../assets/imagenes/maceta3New.png",
    alt: "Maceta3"
  },]

  constructor(private router: Router) {
  }

  navegar(contacto: string) {
      this.router.navigate([contacto]);
  }
}
