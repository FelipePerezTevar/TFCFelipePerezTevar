import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Map, marker, tileLayer} from "leaflet";

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

  slidesStoreFabricacion = [{
    id: 1,
    src: "../../../assets/imagenes/carousel-fabricacion/llenado.jpg",
    alt: "Fabricacion1"
  },{
    id: 2,
    src: "../../../assets/imagenes/carousel-fabricacion/repasado.jpg",
    alt: "Fabricacion2"
  },{
    id: 3,
    src: "../../../assets/imagenes/carousel-fabricacion/barnizado.jpg",
    alt: "Fabricacion3"
  },]

  slidesStoreHistoria = [{
    id: 1,
    src: "../../../assets/imagenes/carousel-historia/horno-antiguo.jpg",
    alt: "Historia1"
  },{
    id: 2,
    src: "../../../assets/imagenes/carousel-historia/torno-antiguo.jpg",
    alt: "Historia2"
  },{
    id: 3,
    src: "../../../assets/imagenes/carousel-historia/instalaciones.jpg",
    alt: "Historia3"
  },]

  ngAfterViewInit(): void{
    const map = new Map('map').setView([39.48969, -0.46404],13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const markerItem = marker([39.48969, -0.46404]).addTo(map).bindPopup("Cerámicas Doli");
    map.fitBounds([
      [markerItem.getLatLng().lat,markerItem.getLatLng().lng]
    ]);
  }

}
