import { Component } from '@angular/core';
import { User } from '../class/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Import the correct module for Router
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  
usuarios: User = {
  email: '',
  password: '',
};

constructor(private authService: AuthService,private storageService: StorageService, private router: Router) {}

loginUser() {
  this.authService.loginUser(this.usuarios).subscribe(
    res => {
      this.storageService.setItem('token', res.token);
      this.router.navigate(['/verMenu']).then(() => {
        window.location.reload();
      });
    },
    err => console.error(err)
  );
}

}
