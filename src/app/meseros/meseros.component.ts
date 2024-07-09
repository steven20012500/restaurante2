import { Component } from '@angular/core';
import { Mesero } from '../class/mesero';
import { MeserosService } from '../services/meseros.service';

@Component({
  selector: 'app-meseros',
  templateUrl: './meseros.component.html',
  styleUrl: './meseros.component.css'
})
export class MeserosComponent {
  mesero: Mesero = {
    _id: '',
    nombre: '',
    imagen: '',
    scoreSelected: false,
    calificacion: 0
 };
 constructor(private meseroService: MeserosService) { }
 ingresarMesero() {
       //ejecutar impuestos
     this.meseroService.agregarMesero(this.mesero).subscribe({
       next: response => {
         console.log('Factura enviada', response);
         this.mesero = {
          _id: '',
          nombre: '',
          imagen: '',
          scoreSelected: false,
          calificacion: 0
        };
       },
       error: error => {
         console.error('Error ingresar mesero', error);
       },
       complete: () => {
         console.log('Solicitud completada');
       }
     });
}
}
