import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-link',
  templateUrl: './toolbar-link.component.html',
  styleUrls: ['./toolbar-link.component.scss']
})
export class ToolbarLinkComponent implements OnInit {
  @Input() text: string;
  @Input() path: string;
  @Input() currentPath: string;
  constructor() {}

  ngOnInit() {}

  isSelected(): boolean {
    return this.path === this.currentPath;
  }
}
