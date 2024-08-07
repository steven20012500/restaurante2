import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesero } from '../class/mesero';

@Injectable({
  providedIn: 'root'
})
export class MeserosService {

  private apiUrl1= 'http://ec2-44-212-25-145.compute-1.amazonaws.com:3000/api-menu/ingresoMesero'
  private apiUrl3= 'http://ec2-44-212-25-145.compute-1.amazonaws.com:3000/api-menu/verMeseros'
  private apiUrl4= 'http://ec2-44-212-25-145.compute-1.amazonaws.com:3000/api-menu/calificarMesero'

  constructor(private http: HttpClient) { }
  
  agregarMesero(mesero: any) {
    return this.http.post(this.apiUrl1, mesero);
  }
  verMeseros(): Observable<Mesero[]> {
    return this.http.get<Mesero[]>(this.apiUrl3);
  }
  calificarMesero(meseroId: string, calificacion: number): Observable<any> {
    return this.http.post(this.apiUrl4, { meseroId, calificacion });
  }
}
