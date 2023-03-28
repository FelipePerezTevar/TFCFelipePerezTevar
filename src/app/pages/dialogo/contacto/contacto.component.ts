import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import * as nodemailer from 'nodemailer';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  formulario = this.fb.nonNullable.group({
    email: ['', Validators.required],
    asunto: ['', Validators.required],
    message: ['', Validators.required]
  });

  public successMessage: string;

  constructor(public contactoRef: MatDialogRef<ContactoComponent>, private fb: FormBuilder){

    this.successMessage = '';

  }

  enviarCorreo() {
      const email = this.formulario.value.email;
      const subject = this.formulario.value.asunto
      const message = this.formulario.value.message;
      this.onSubmit(email, subject, message);
      this.contactoRef.close();
  }

  salirDialogo() {
      this.contactoRef.close()
  }

  public onSubmit(email: string | undefined, asunto: string | undefined, message: string | undefined): void {
    const transporter = nodemailer.createTransport({

      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'esloper317@gmail.com',
        pass: 'quemargallinas324'
      }

    });

    const mailOptions = {
      from: 'esloper317@gmail.com',
      to: email,
      subject: asunto,
      text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        console.log(error);
      }else{
        console.log('Email enviado: ' + info.response);
        this.successMessage = 'Email enviado exitosamente';
      }
    });

  }

}
