import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsRoutingModule } from './forms-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class FormsModule { }
