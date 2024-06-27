import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';
import { OrderService } from '../order.service';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-ver-menu',
  templateUrl: './ver-menu.component.html',
  styleUrl: './ver-menu.component.css'
})
export class VerMenuComponent /*implements OnInit*/ {
  menu: Menu[] = [];
  constructor(private menuService: MenuService, private orderService: OrderService,private storageService: StorageService) { } 
  ngOnInit(): void {
    this.menuService.verPlatos().subscribe(menu => {
      this.menu = menu;  
    });
  }
  orderData = { dishId: '', quantity: 1 };

  GenerarOrden() {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage (asegúrate de haberlo almacenado correctamente)
    const token2 = this.storageService.getItem('token');
    console.log('Token de autenticación:', token2);
    if (!token2) {
      console.error('Token de autenticación no encontrado.');
      return;
    }

    if (token2) {
      this.orderService.createOrder(this.orderData, token2)
        .subscribe(
          (response) => {
            console.log('Orden creada exitosamente:', response);
            // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito o navegar a otra página
          },
          (error) => {
            console.error('Error al crear la orden:', error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
          }
        );
    } else {
      console.error('Token de autenticación no encontrado.');
      return; // Add a return statement here to exit the function when token2 is null
    }
  }
}
