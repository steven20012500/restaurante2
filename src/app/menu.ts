export class Menu {
    constructor(_id='', nombre= '',  precio= 0.0,  descripcion= '', categoria= '' ,imagen= '', quantity = 0, quantitySelected = false)
     {
      this._id = _id;
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion; 
      this.categoria = categoria;
      this.imagen = imagen;
      this.quantity = quantity;
      this.quantitySelected = quantitySelected;
    }
    _id: string;
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    imagen: string;
    quantity: number;
    quantitySelected: boolean;  
  }
