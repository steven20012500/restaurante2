import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../class/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl2= 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/ingresoPlatos'
  private apiUrl3= 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/verPlatos'
  constructor(private http: HttpClient) { }
  
  agregarPlato(plato: any) {
    return this.http.post(this.apiUrl2, plato);
  }
  verPlatos(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl3);
  }
}
