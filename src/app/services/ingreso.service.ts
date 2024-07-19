import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Menu } from '../class/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  private apiUrl1= 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/api-menu/ingreso'
  private apiUrl2= 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/api-menu/Umenu'

  constructor(private http: HttpClient) { }
  
  ingresoUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl1, user);
  }

  updateMenu(id: string, menu: Menu): Observable<any> {
    return this.http.put(`${this.apiUrl2}/${id}`, menu);
  }
}
