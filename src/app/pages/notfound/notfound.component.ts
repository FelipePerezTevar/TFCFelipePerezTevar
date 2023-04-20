import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {


  constructor(private router: Router) {
  }


  volverAInicio() {
    this.router.navigate(['/inicio'])
  }
}
