import { MediaScreenService } from './../../services/media-screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(public mediaScreenService: MediaScreenService) {}

  ngOnInit() {}
}
