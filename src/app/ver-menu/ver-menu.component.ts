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
export class VerMenuComponent implements OnInit {
  menu: Menu[] = [];
  orders: { dishId: string, quantity: number }[] = [];
  quantitySelected: boolean = false; // Variable para controlar si se ha seleccionado cantidad
  showGenerateMessage: boolean = false; // Variable para mostrar mensaje al generar la orden

  constructor(
    private menuService: MenuService, 
    private orderService: OrderService,
    private storageService: StorageService
  ) { } 
  
  ngOnInit(): void {
    this.menuService.verPlatos().subscribe(menu => {
      this.menu = menu.map(item => ({ ...item, quantity: 1, quantitySelected: false })); // Añadir campo quantity e isSelected a cada plato
    });
  }

  orderData = { dishId: '', quantity: 1 };

  selectDish(menu: Menu) {
    // Verificar si ya existe el plato en las órdenes
    const existingOrderIndex = this.orders.findIndex(order => order.dishId === menu._id);

    if (existingOrderIndex !== -1) {
      // Si ya existe, actualizar la cantidad
      this.orders[existingOrderIndex].quantity += menu.quantity;
      this.quantitySelected = true;
    } else {
      // Si no existe, agregar como nueva orden
      this.orders.push({ dishId: menu._id, quantity: menu.quantity });
      this.quantitySelected = true;
    }
    menu.quantitySelected = true; // Marcar el plato como seleccionado

  }

  GenerarOrden() {
    const token = this.storageService.getItem('token');
   
    if (!token) {
      console.error('Token de autenticación no encontrado.');
      return;
    }

    if (this.orders.length === 0) {
      console.error('No se han seleccionado platos.');
      return;
    }

    // Recorrer todas las órdenes seleccionadas y crear una orden para cada una
    this.orders.forEach(order => {
      this.orderService.createOrder(order, token)
        .subscribe(
          (response) => {
            console.log(`Orden creada exitosamente para dishId ${order.dishId}:`, response);
            // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito o navegar a otra página
            this.showGenerateMessage = true; // Mostrar mensaje de orden generada exitosamente

          },
          (error) => {
            console.error(`Error al crear la orden para dishId ${order.dishId}:`, error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
          }
        );
    });

    // Limpiar las órdenes después de generarlas
    this.orders = [];
    this.menu = this.menu.map(item => ({ ...item, quantity: 1, quantitySelected: false}));


  }
}
