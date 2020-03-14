import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenBasicComponent } from './template-driven-basic.component';
import { TemplateDrivenBasicRoutingModule } from './template-driven-basic-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenBasicRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [TemplateDrivenBasicComponent]
})
export class TemplateDrivenBasicModule { }
