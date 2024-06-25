import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component'; 
import { MenuComponent } from './menu/menu.component'; 
import { NavigationComponent } from './navigation/navigation.component'; 
import { UserComponent } from './user/user.component'; 
import { VerMenuComponent } from './ver-menu/ver-menu.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'user', component: UserComponent },
  { path: 'verMenu', component: VerMenuComponent, canActivate : [authGuard]},

  { path: '', redirectTo: '/ingreso', pathMatch: 'full' } // Redirige al informacion por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
