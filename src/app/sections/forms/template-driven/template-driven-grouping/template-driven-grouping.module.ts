import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenGroupingComponent } from './template-driven-grouping.component';
import { TemplateDrivenGroupingRoutingModule } from './template-driven-grouping-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenGroupingRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [TemplateDrivenGroupingComponent]
})
export class TemplateDrivenGroupingModule { }
