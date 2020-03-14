import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenSettingPatchingComponent } from './template-driven-setting-patching.component';
import { TemplateDrivenSettingPatchingRoutingModule } from './template-driven-setting-patching-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenSettingPatchingRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [TemplateDrivenSettingPatchingComponent]
})
export class TemplateDrivenSettingPatchingModule { }
