import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ObservablesRoutingModule } from './services-dependency-injection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    SharedModule
  ],
})
export class ObservablesModule { }
