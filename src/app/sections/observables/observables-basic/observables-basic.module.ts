import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ObservablesBasicComponent } from './observables-basic.component';
import { ObservablesBasicRoutingModule } from './observables-basic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObservablesBasicRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ObservablesBasicComponent]
})
export class ObservablesBasicModule { }
