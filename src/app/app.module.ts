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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProductoComponent,
    ProductoDetailComponent,
    QuienesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
