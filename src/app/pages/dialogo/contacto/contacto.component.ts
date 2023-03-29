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
    asunto: ['', Validators.required],
    cuerpo: ['', Validators.required]
  });

  constructor(public contactoRef: MatDialogRef<ContactoComponent>, private fb: FormBuilder){

  }

  enviarCorreo() {
      console.log(this.formulario.value.email);
      console.log(this.formulario.value.cuerpo);
      this.contactoRef.close("enviar");
  }

  salirDialogo() {
      this.contactoRef.close("cancelar")
  }
}
