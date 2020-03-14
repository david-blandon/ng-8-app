import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenBasicComponent } from './model-driven-basic.component';
import { ModelDrivenBasicRoutingModule } from './model-driven-basic-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModelDrivenBasicRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ModelDrivenBasicComponent]
})
export class ModelDrivenBasicModule { }
