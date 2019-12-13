import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(public router: Router) {}

  currentRoute(): string {
    return this.router.url;
  }

  currentRouteIsIniciarSesion(): boolean {
    return this.currentRoute().startsWith('/iniciarSesion');
  }

  currentRouteIsCrearCuenta(): boolean {
    return this.currentRoute().startsWith('/crearCuenta');
  }

  currentRouteIsRecuperarContrasena(): boolean {
    return this.currentRoute().startsWith('/recuperarContrasena');
  }

  currentRouteIsHome(): boolean {
    return this.currentRoute().startsWith('/home');
  }
}
