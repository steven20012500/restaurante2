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
    nombre: 'pizza',
    precio: 8,
    descripcion: 'peperoni',
    categoria: 'comida',
    imagen: 'ad.jpg'
 };
 constructor(private menuService: MenuService) { }
 enviarFactura() {
       //ejecutar impuestos
     this.menuService.agregarPlato(this.facturaDatos).subscribe({
       next: response => {
         console.log('Factura enviada', response);
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
