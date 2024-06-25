import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  facturaDatos: Menu = {
    nombre: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    imagen: ''
 };
 constructor(private menuService: MenuService) { }
 enviarFactura() {
       //ejecutar impuestos
     this.menuService.agregarPlato(this.facturaDatos).subscribe({
       next: response => {
         console.log('Factura enviada', response);
         this.facturaDatos = {
          nombre: '',
          precio: 0,
          descripcion: '',
          categoria: '',
          imagen: ''
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
