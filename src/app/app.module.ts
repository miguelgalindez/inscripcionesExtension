import { ToolbarLinkComponent } from './toolbar-link/toolbar-link.component';
import { HeaderComponent } from './header/header.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'iniciarSesion', component: IniciarSesionComponent },
  { path: 'crearCuenta', component: CrearCuentaComponent },
  { path: 'recuperarContrasena', component: RecuperarContrasenaComponent },
  { path: 'home', component: MainNavComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    IndexComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    RecuperarContrasenaComponent,
    HeaderComponent,
    ToolbarLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
