import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

const modules = [
  FlexModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule {}
