import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenRoutingModule } from './model-driven-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModelDrivenRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class ModelDrivenModule { }
