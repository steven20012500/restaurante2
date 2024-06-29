import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  private apiUrl1= 'http://localhost:3000/api-menu/ingreso'
  constructor(private http: HttpClient) { }
  
  ingresoUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl1, user);
  }
}
