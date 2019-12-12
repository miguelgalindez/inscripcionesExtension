import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit, OnDestroy {
  mediaObserverSubscription: Subscription;
  currentBreakpoint: string;
  constructor(mediaObserver: MediaObserver, private router: Router) {
    this.mediaObserverSubscription = mediaObserver
      .asObservable()
      .subscribe((events: MediaChange[]) => {
        this.currentBreakpoint = events[0].mqAlias;
        console.log(this.currentBreakpoint);
      });
  }

  getCardClass(): string {
    console.log(`this.currentBreakpoint ${this.currentBreakpoint}`);
    if (this.currentBreakpoint && this.router.url === '/iniciarSesion') {
      if (this.currentBreakpoint === 'xs') {
        return 'card-size-xs';
      } else {
        return 'card-size-gt-xs';
      }
    }
    return null;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.mediaObserverSubscription.unsubscribe();
  }
}
