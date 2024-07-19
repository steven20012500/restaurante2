import { Component, OnInit } from '@angular/core';
import {  } from '../services/menu.service';
import { Pedido } from '../class/pedido';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-borrar-pedido',
  templateUrl: './borrar-pedido.component.html',
  styleUrl: './borrar-pedido.component.css'
})
export class BorrarPedidoComponent implements OnInit {
  pedidos: Pedido = {
    _id: '',
    user: '',
    total: 0,
 };
 pedido: Pedido[] = [];

/*
 obtenerEmpleados(): void {
  this.empleadoService.obtenerEmpleados().subscribe(data => {
    this.empleado = data;
  });
}*/
constructor(private orderService: OrderService) { }

 ngOnInit(): void {
 
  this.orderService.verPedido().subscribe((pedido: Pedido[]) => {
    this.pedido = pedido.map(pedido => ({ ...pedido}));
  });
  //this.obtenerEmpleados();
}
 
  eliminarPedido(id: string) {
    this.orderService.deletePedido(id).subscribe({
      next: response => {
        console.log('Orden eliminada', response);
        window.location.reload();
      },
      error: error => {
        console.error('Error al eliminar orden', error);
      },
      complete: () => {
        console.log('Solicitud completada');
      }
    });
  }
}
