export type ProductoResponse = Productocolor[]

export interface Productocolor {
  id: number
  producto: Producto
  color: Color
  imagen: Imagen
}

export interface Producto {
  id: number
  referencia: string
  modelo: Modelo
  tipo: Tipo
  medidas: Medida[]
}

export interface Modelo {
  id: number
  nombre: string
}

export interface Tipo {
  id: number
  descripcion: string
}

export interface Medida {
  id: number
  diametro: number
  ancho: number
  alto: number
  precio: number
}

export interface Color {
  id: number
  nombre: string
}

export interface Imagen {
  id: number
  nombre: string
  url: string
  tipo: string
}
