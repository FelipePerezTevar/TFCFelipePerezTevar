import {Component, OnInit} from '@angular/core';
import {Medida, Modelo, Productocolor, ProductoResponse, Tipo} from "../../models/ProductoResponse";
import {ProductoService} from "../../services/producto.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{

  response: ProductoResponse = [];
  productocolors: Productocolor[] = [];
  tipoList: string[] = [];
  modeloList: string[] = [];


  formulario = this.fb.nonNullable.group({
    diametro: [0],
    alto: [0],
    ancho: [0],
    tipo: ['tipo'],
    modelo: ['modelo']
  })


  constructor(private productoService: ProductoService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.traerProductos();
    this.traerTipo();
    this.traerModelo();
  }

  private traerProductos(){
    this.productoService.getProductos().subscribe({
      next: value => {
        if(value){
          this.arreglarResponse(value);
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  private arreglarResponse(value: ProductoResponse){
    this.response = value;

    for(let i = 0; i < this.response.length; i++) {

      if(this.productocolors.length == 0){
        this.productocolors.push(this.response[i]);
      }

      if(this.productocolors[this.productocolors.length - 1].producto.id != this.response[i].producto.id){
        this.productocolors.push(this.response[i]);
      }

    }
  }

  private traerTipo(){

    this.productoService.getTipo().subscribe({
      next: value => {

        for(let i = 0; i < value.length; i++){
          this.tipoList.push(value[i].descripcion);
        }

      },
      error: err => {
        console.log(err);
      }
    })

  }

  private traerModelo(){

    this.productoService.getModelo().subscribe({
      next: value => {

        for(let i = 0; i < value.length; i++){
          this.modeloList.push(value[i].nombre);
        }

      },
      error: err => {console.log(err);}
    })

  }


  navegarADetalle($event: number){
    this.productoService.productoId = $event;
    this.router.navigate(['detalle']);
  }

  anyadirFiltro() {

    this.productoService.getProductosFiltro(this.formulario.value.diametro!, this.formulario.value.alto!,this.formulario.value.ancho!,this.formulario.value.tipo!,this.formulario.value.modelo!).subscribe({
      next: value =>  {
            if(value){
              this.productocolors = [];
              this.arreglarResponse(value);

            }
      },
      error: err => {
        console.log(err);
      }
    })

  }
}
