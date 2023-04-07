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

  ngAfterViewInit(): void{
    const map = new Map('map').setView([39.48951, -0.45171],13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const markerItem = marker([39.48951, -0.45171]).addTo(map).bindPopup("Cerámicas Doli");
    map.fitBounds([
      [markerItem.getLatLng().lat,markerItem.getLatLng().lng]
    ]);
  }

}
