import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenFormArrayComponent } from './model-driven-form-array.component';
import { ModelDrivenFormArrayRoutingModule } from './model-driven-form-array-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModelDrivenFormArrayRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ModelDrivenFormArrayComponent]
})
export class ModelDrivenFormArrayModule { }