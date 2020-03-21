import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgRxEffectComponent } from './ngrx-effect.component';
import { NgRxEffectRoutingModule } from './ngrx-effect-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgRxEffectRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [NgRxEffectComponent]
})
export class NgRxEffectModule { }
