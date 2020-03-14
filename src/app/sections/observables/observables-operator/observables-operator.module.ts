import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ObservablesOperatorComponent } from './observables-operator.component';
import { ObservablesOperatorRoutingModule } from './observables-operator-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObservablesOperatorRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ObservablesOperatorComponent]
})
export class ObservablesOperatorModule { }
