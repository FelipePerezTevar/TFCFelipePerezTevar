import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoDetailComponent } from './pages/producto-detail/producto-detail.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { ContactoComponent } from './pages/dialogo/contacto/contacto.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
//import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProductoComponent,
    ProductoDetailComponent,
    QuienesComponent,
    ContactoComponent,
    NotfoundComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    //LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
