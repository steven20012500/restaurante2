import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesero } from '../class/mesero';

@Injectable({
  providedIn: 'root'
})
export class MeserosService {

  private apiUrl1= 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/ingresoMesero'
  private apiUrl3= 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/verMeseros'
  private apiUrl4= 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/api-menu/calificarMesero'

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
