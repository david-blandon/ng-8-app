import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]  
})
export class TemplateDrivenModule { }
