import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductoComponent} from "./pages/producto/producto.component";
import {QuienesComponent} from "./pages/quienes/quienes.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {ContactoComponent} from "./pages/dialogo/contacto/contacto.component";
import {InicioComponent} from "./pages/inicio/inicio.component";

const routes: Routes = [

  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'quienes',
    component: QuienesComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
