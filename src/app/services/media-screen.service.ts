// tslint:disable: variable-name
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription, Observable, ReplaySubject } from 'rxjs';
import { map, publishReplay, refCount, tap } from 'rxjs/operators';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaScreenService {
  screenSize: Observable<string>;
  screen_is_xs: Observable<boolean>;
  screen_is_sm: Observable<boolean>;
  screen_is_gt_sm: Observable<boolean>;

  constructor(mediaObserver: MediaObserver) {
    this.screenSize = mediaObserver
      .asObservable()
      .pipe(map((changes: MediaChange[]) => changes[0].mqAlias));

    this.screen_is_xs = this.screenSize.pipe(
      map((size: string) => size === 'xs'),
      publishReplay(1),
      refCount()
    );

    this.screen_is_sm = this.screenSize.pipe(
      map((size: string) => size === 'sm'),
      publishReplay(1),
      refCount()
    );

    this.screen_is_gt_sm = this.screenSize.pipe(
      map((size: string) => size !== 'xs' && size !== 'sm'),
      publishReplay(1),
      refCount()
    );
  }
}
