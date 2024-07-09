import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../class/menu';
import { OrderService } from '../services/order.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-ver-menu',
  templateUrl: './ver-menu.component.html',
  styleUrls: ['./ver-menu.component.css'] // Cambié a 'styleUrls' para arreglar el typo
})
export class VerMenuComponent implements OnInit {
  @ViewChild('PedidoRealizado', { static: false }) resultadoElement: ElementRef | undefined;
  menu: Menu[] = [];
  statePedido: boolean = false;
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

  devolverPlato(id: string): string | null {
    const item = this.menu.find(item => item._id === id);
    return item ? item.nombre : null;
  }

  calcularPrecioFinal(): number {
    let total = 0;

    this.orders.forEach(order => {
      const menuItem = this.menu.find(item => item._id === order.dishId);
      if (menuItem) {
        total += order.quantity * menuItem.precio;
      }
    });

    return total;
  }

  selectDish(menu: Menu): void {
    const existingOrderIndex = this.orders.findIndex(order => order.dishId === menu._id);

    if (existingOrderIndex !== -1) {
      this.orders[existingOrderIndex].quantity += menu.quantity;
      this.quantitySelected = true;
    } else {
      this.orders.push({ dishId: menu._id, quantity: menu.quantity });
      this.quantitySelected = true;
    }
    menu.quantitySelected = true;
  }

  GenerarOrden(): void {
    const token = this.storageService.getItem('token');
   
    if (!token) {
      console.error('Token de autenticación no encontrado.');
      return;
    }

    if (this.orders.length === 0) {
      console.error('No se han seleccionado platos.');
      return;
    }

    const orderData = {
      dishes: this.orders.map(order => ({
        dishId: order.dishId,
        quantity: order.quantity
      })),
      total: this.calcularPrecioFinal() // Calcular el total de la orden
    };

    this.orderService.createOrder(orderData, token).subscribe(
      (response) => {
        console.log('Orden creada exitosamente:', response);
        this.showGenerateMessage = true; // Mostrar mensaje de orden generada exitosamente
        // Limpiar las órdenes después de generarlas
        this.statePedido = true;
        this.scrollToResultado();

        setTimeout(() => {
          this.statePedido = false;
        }, 3000);
    
        this.orders = [];
        this.menu = this.menu.map(item => ({ ...item, quantity: 1, quantitySelected: false }));
      },
      (error) => {
        console.error('Error al crear la orden:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
      }
    );
  }

  private scrollToResultado() {
    if (this.resultadoElement) {
      this.resultadoElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
