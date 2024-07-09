import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Mesero } from '../class/mesero';
import { MeserosService } from '../services/meseros.service';

@Component({
  selector: 'app-calificar-mesero',
  templateUrl: './calificar-mesero.component.html',
  styleUrl: './calificar-mesero.component.css'
})
export class CalificarMeseroComponent implements OnInit {
  @ViewChild('CalificacionRealizada', { static: false }) resultadoElement: ElementRef | undefined;

  meseros: Mesero[] = []; // Array para almacenar los meseros
  calificacion: number = 0; // Variable para almacenar la calificación
  stateCalificar: boolean = false; // Variable para controlar si se ha seleccionado calificación

  constructor(
    private meseroService: MeserosService,
  ) { } 
  
  ngOnInit(): void {
    this.meseroService.verMeseros().subscribe((meseros: Mesero[]) => {
      this.meseros = meseros.map(mesero => ({ ...mesero, calificacion: 0, scoreSelected : false })); // Añadir campo calificación a cada mesero
    });
  }

  calificarMesero(meseroId: string, calificacion: number) {
    this.meseroService.calificarMesero(meseroId, calificacion).subscribe(
      (response) => {
        console.log('Calificación añadida:', response);
        this.meseros = this.meseros.map(mesero => ({ ...mesero, calificacion: 0, scoreSelected : false })); // Añadir campo calificación a cada mesero
        this.stateCalificar = true;
        this.scrollToResultado() ;
        setTimeout(() => {
          this.stateCalificar = false;
        }, 3000);
    
      },
      (error) => {
        console.error('Error al calificar mesero:', error);
      }
    );
  }
  
  private scrollToResultado() {
    if (this.resultadoElement) {
      this.resultadoElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
