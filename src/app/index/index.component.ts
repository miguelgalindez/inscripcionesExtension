import { MediaScreenService } from './../services/media-screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public mediaScreenService: MediaScreenService) {}

  ngOnInit() {
  }

}
