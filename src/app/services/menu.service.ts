import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../class/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl2= 'http://ec2-44-212-25-145.compute-1.amazonaws.com:3000/api-menu/ingresoPlatos'
  private apiUrl3= 'http://ec2-44-212-25-145.compute-1.amazonaws.com:3000/api-menu/verPlatos'
  private apiUrl4= 'http://ec2-44-212-25-145.compute-1.amazonaws.com:3000/api-menu/Uplatos'
  constructor(private http: HttpClient) { }
  
  agregarPlato(plato: any) {
    return this.http.post(this.apiUrl2, plato);
  }
  verPlatos(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl3);
  }
  updateMenu(id: string, menu: Menu): Observable<any> {
    return this.http.put(`${this.apiUrl4}/${id}`, menu);
  }
}
