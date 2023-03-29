import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import transporter from "../../../service/mailer";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  formulario = this.fb.nonNullable.group({
    email: ['', Validators.required],
    subject: ['', Validators.required],
    cuerpo: ['', Validators.required]
  });

  constructor(public contactoRef: MatDialogRef<ContactoComponent>, private fb: FormBuilder){

  }

  async enviarCorreo() {

    try {

      await transporter.sendMail({
        from: this.formulario.value.email,
        to: 'felipepereztevar@gmail.com',
        subject: this.formulario.value.subject,
        text: this.formulario.value.cuerpo
      });

    }catch(error){
      console.log(error);
    }


      this.contactoRef.close("enviar");
  }

  salirDialogo() {
      this.contactoRef.close("cancelar")
  }
}
