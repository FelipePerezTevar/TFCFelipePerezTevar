import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";

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

  enviarCorreo(e: Event) {

    try{
      e.preventDefault();

      emailjs.sendForm('service_ladblgy', 'template_huusd3o', e.target as HTMLFormElement, 'kT-j18WasUFJy0xQY')
        .then((result:EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log((error.text));
        });

    }catch (error) {
      console.log(error)
    }

      this.contactoRef.close("enviar");
  }

  salirDialogo() {
      this.contactoRef.close("cancelar")
  }
}
