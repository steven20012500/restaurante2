export class Menu {
    constructor( nombre= '',  precio= 0.0,  descripcion= '', categoria= '' ,imagen= '') {
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion; 
      this.categoria = categoria;
      this.imagen = imagen;
    }
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    imagen: string;
  }
