import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Modelo, ProductoResponse, Tipo} from "../models/ProductoResponse";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(private http: HttpClient) { }

  public getProductos(): Observable<ProductoResponse>{
    const url = "http://localhost:8080/productocolor/lista";
    return this.http.get<ProductoResponse>(url);
  }

  public getProductosDetalle(idproducto: number): Observable<ProductoResponse>{

    const url = `http://localhost:8080/productocolor/producto/${idproducto}`
    return this.http.get<ProductoResponse>(url);
  }

  public getProductosFiltro(diametro: number, alto:number, ancho:number, tipo: string, modelo: string): Observable<ProductoResponse>{

    const url = `http://localhost:8080/productocolor/filtro?diametro=${diametro}&alto=${alto}&ancho=${ancho}&tipo=${tipo}&modelo=${modelo}`
    return this.http.get<ProductoResponse>(url);
  }

  public getTipo(): Observable<Tipo[]>{

    const url = 'http://localhost:8080/tipo/lista'
    return this.http.get<Tipo[]>(url);

  }

  public getModelo(): Observable<Modelo[]>{
    const url= 'http://localhost:8080/modelo/lista'
    return this.http.get<Modelo[]>(url);
  }


}
