import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  formulario = this.fb.nonNullable.group({
    email: ['', Validators.required],
    cuerpo: ['', Validators.required]
  });

  constructor(public contactoRef: MatDialogRef<ContactoComponent>, private fb: FormBuilder){

  }

  enviarCorreo() {
      this.contactoRef.close("enviar");
  }

  salirDialogo() {
      this.contactoRef.close("cancelar")
  }
}
