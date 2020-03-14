import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenCustomValidationComponent } from './model-driven-custom-validation.component';
import { ModelDrivenCustomValidationRoutingModule } from './model-driven-custom-validation-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModelDrivenCustomValidationRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ModelDrivenCustomValidationComponent]
})
export class ModelDrivenCustomValidationModule { }