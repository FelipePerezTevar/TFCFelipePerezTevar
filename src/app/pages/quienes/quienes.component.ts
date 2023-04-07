import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.scss']
})
export class QuienesComponent {

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

}
