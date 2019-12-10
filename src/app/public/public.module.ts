import { ToolbarLinkComponent } from './header/toolbar-link/toolbar-link.component';
import { MaterialModule } from './../material/material.module';
import { matcherForSinglePath } from './path.matcher';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { HeaderComponent } from './header/header.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MainComponent } from './main/main.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  {
    matcher: matcherForSinglePath('crearCuenta'),
    component: CrearCuentaComponent
  },
  {
    matcher: matcherForSinglePath('iniciarSesion'),
    component: IniciarSesionComponent
  },
  {
    matcher: matcherForSinglePath('recuperarContrasena'),
    component: RecuperarContrasenaComponent
  }
];

@NgModule({
  declarations: [
    PublicComponent,
    CrearCuentaComponent,
    HeaderComponent,
    IniciarSesionComponent,
    MainComponent,
    RecuperarContrasenaComponent,
    ToolbarLinkComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule]
})
export class PublicModule {}
