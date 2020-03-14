import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ObservablesRoutingModule } from './observables-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    SharedModule
  ]
})
export class ObservablesModule { }
