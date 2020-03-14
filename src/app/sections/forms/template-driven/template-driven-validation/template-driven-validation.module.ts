import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenValidationComponent } from './template-driven-validation.component';
import { TemplateDrivenValidationRoutingModule } from './template-driven-validation-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenValidationRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [TemplateDrivenValidationComponent]
})
export class TemplateDrivenValidationModule { }