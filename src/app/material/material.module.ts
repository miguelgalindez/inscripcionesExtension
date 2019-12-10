import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule,  MatDividerModule, MatButtonModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

const modules = [MatToolbarModule, MatCardModule, MatDividerModule, MatButtonModule, FlexModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule {}
