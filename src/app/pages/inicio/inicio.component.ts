import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit{

  constructor(private router: Router) {
  }

  navegar(contacto: string) {
      this.router.navigate([contacto]);
  }

  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
  }
}
