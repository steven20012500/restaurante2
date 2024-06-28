import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component'; 
import { MenuComponent } from './menu/menu.component'; 
import { NavigationComponent } from './navigation/navigation.component'; 
import { UserComponent } from './user/user.component'; 
import { VerMenuComponent } from './ver-menu/ver-menu.component';
import { authGuard } from './auth.guard';
import { MeserosComponent } from './meseros/meseros.component';
import { CalificarMeseroComponent } from './calificar-mesero/calificar-mesero.component';


const routes: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: 'menu', component: MenuComponent, canActivate : [authGuard]},
  { path: 'navigation', component: NavigationComponent },
  { path: 'user', component: UserComponent, canActivate : [authGuard]},
  { path: 'calificarMesero', component: CalificarMeseroComponent, canActivate : [authGuard]},
  { path: 'meseros', component: MeserosComponent, canActivate : [authGuard]},
  { path: 'verMenu', component: VerMenuComponent, canActivate : [authGuard]},

  { path: '', redirectTo: '/ingreso', pathMatch: 'full' } // Redirige al informacion por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
