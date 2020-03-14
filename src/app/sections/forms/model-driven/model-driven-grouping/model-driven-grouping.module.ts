import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenGroupingComponent } from './model-driven-grouping.component';
import { ModelDrivenGroupingRoutingModule } from './model-driven-grouping-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModelDrivenGroupingRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ModelDrivenGroupingComponent]
})
export class ModelDrivenGroupingModule { }
