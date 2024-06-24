import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl1 = 'http://localhost:3000/api/agregarFactura' // URL al archivo JSON
  private apiUrl2= 'http://localhost:3000/api-menu/ingresoPlatos'
  private apiUrl3= 'http://localhost:3000/api-menu/verPlatos'
  constructor(private http: HttpClient) { }
  
  agregarPlato(plato: any) {
    return this.http.post(this.apiUrl2, plato);
  }
  verPlatos(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl3);
  }
}
