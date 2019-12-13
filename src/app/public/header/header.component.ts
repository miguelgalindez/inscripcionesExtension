import { MediaScreenService } from './../../services/media-screen.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentPath: string;

  constructor(
    public router: Router,
    public mediaScreenService: MediaScreenService
  ) {}

  ngOnInit() {}
}
