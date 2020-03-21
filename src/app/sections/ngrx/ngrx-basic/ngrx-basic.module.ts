import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgRxBasicComponent } from './ngrx-basic.component';
import { NgRxBasicRoutingModule } from './ngrx-basic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgRxBasicRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [NgRxBasicComponent]
})
export class NgRxBasicModule { }
