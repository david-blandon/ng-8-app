import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ObservablesSubjectComponent } from './observables-subject.component';
import { ObservablesSubjectRoutingModule } from './observables-subject-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObservablesSubjectRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ObservablesSubjectComponent]
})
export class ObservablesSubjectModule { }
