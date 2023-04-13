import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductoResponse} from "../models/ProductoResponse";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _productoId = 0;

  set productoId(value: number){
    this._productoId = value;
    sessionStorage.setItem('productoID', ""+this.productoId);
  }
  constructor(private http: HttpClient) { }

  public getProductos(): Observable<ProductoResponse>{
    const url = "http://localhost:8080/productocolor/lista";
    return this.http.get<ProductoResponse>(url);
  }
}
