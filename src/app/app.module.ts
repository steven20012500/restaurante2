import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importa withFetch
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { VerMenuComponent } from './ver-menu/ver-menu.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    IngresoComponent,
    VerMenuComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //provideClientHydration()
    provideHttpClient(withFetch()) // Configura HttpClient para usar fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
