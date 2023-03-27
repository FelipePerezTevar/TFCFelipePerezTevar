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

    const dialogref = this.dialog.open(ContactoComponent);

    dialogref.afterClosed().subscribe(
      result => {

        if(result == "enviar"){
          //Enviamos correo
          console.log("Holi de confirmación")
        }

      }
    )

  }
}
