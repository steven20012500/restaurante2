import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../class/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  facturaDatos: Menu = {
    _id: '',
    nombre: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    imagen: '',
    quantity: 0,
    quantitySelected: false,
 };
 constructor(private menuService: MenuService) { }
 ingresarPlato() {
       //ejecutar impuestos
     this.menuService.agregarPlato(this.facturaDatos).subscribe({
       next: response => {
         console.log('Factura enviada', response);
         this.facturaDatos = {
          _id: '',
          nombre: '',
          precio: 0,
          descripcion: '',
          categoria: '',
          imagen: '',
          quantity: 0,
          quantitySelected: false
        };
       },
       error: error => {
         console.error('Error al enviar la factura', error);
       },
       complete: () => {
         console.log('Solicitud completada');
       }
     });
}
}
