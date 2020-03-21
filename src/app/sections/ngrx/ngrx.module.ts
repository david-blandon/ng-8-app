import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgRxRoutingModule } from './ngrx-routing.module';
import { NgRxEffectService } from './ngrx-effect/ngrx-effect.service';

@NgModule({
  imports: [
    CommonModule,
    NgRxRoutingModule,
    SharedModule
  ],
  providers: [NgRxEffectService]
})
export class NgRxModule { }
