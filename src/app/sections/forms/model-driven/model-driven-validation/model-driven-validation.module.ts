import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenValidationComponent } from './model-driven-validation.component';
import { ModelDrivenValidationRoutingModule } from './model-driven-validation-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModelDrivenValidationRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ModelDrivenValidationComponent]
})
export class ModelDrivenValidationModule { }