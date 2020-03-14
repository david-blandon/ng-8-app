import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesSubjectChildComponent } from './observables-subject-child/observables-subject-child.component';

@NgModule({
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    SharedModule
  ],
})
export class ObservablesModule { }
