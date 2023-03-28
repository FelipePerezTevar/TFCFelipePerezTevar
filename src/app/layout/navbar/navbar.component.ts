import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactoComponent} from "../../pages/dialogo/contacto/contacto.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private dialog: MatDialog) {
  }

  contactoDialogo() {

    this.dialog.open(ContactoComponent);
  }
}
