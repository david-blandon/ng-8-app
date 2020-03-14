import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenReactiveComponent } from './model-driven-reactive.component';
import { ModelDrivenReactiveRoutingModule } from './model-driven-reactive-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModelDrivenReactiveRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [ModelDrivenReactiveComponent]
})
export class ModelDrivenReactiveModule { }