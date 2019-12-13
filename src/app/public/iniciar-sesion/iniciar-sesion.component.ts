import { MediaScreenService } from './../../services/media-screen.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { unsupported } from '@angular/compiler/src/render3/view/util';

const componentUrl = '/iniciarSesion';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit, OnDestroy {
  private unSubscribe: Subject<void>;
  screenSize: string;

  constructor(
    private router: Router,
    public mediaScreenService: MediaScreenService
  ) {}

  ngOnInit() {
    this.unSubscribe = new Subject<void>();
    this.mediaScreenService.screenSize
      .pipe(takeUntil(this.unSubscribe))
      .subscribe((screenSize: string) => {
        this.screenSize = screenSize;
      });
  }

  getCardClass(): string {
    if (this.screenSize && this.router.url === componentUrl) {
      if (this.screenSize === 'xs') {
        return 'card-size-xs';
      } else {
        return 'card-size-gt-xs';
      }
    }
    return null;
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
