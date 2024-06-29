import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl1= 'http://localhost:3000/api-menu/registro'
  constructor(private http: HttpClient) { }
  
  agregarUser(user: any) {
    return this.http.post(this.apiUrl1, user);
  }
  
}
