import { RoutingService } from './services/routing.service';
import { MediaScreenService } from './services/media-screen.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inscripcionesExtension';

  /* isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    ); */

  constructor(
    public routingService: RoutingService,
    public mediaScreenService: MediaScreenService
  ) {}


}
