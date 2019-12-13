import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-link',
  styleUrls: ['./toolbar-link.component.scss'],
  template: `
    <button mat-button [routerLink]="[path]"
            [ngClass]="{selected: isSelected}">{{ text }}</button>
  `
})
export class ToolbarLinkComponent implements OnInit {
  @Input() text: string;
  @Input() path: string;
  @Input() isSelected: boolean;
  constructor() {}

  ngOnInit() {}
}
