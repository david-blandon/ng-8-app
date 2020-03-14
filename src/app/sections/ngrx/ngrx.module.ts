import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgRxRoutingModule } from './ngrx-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgRxRoutingModule,
    SharedModule
  ]
})
export class NgRxModule { }
