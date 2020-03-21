import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PushStrategyRoutingModule } from './push-strategy-routing.module';
import { PushStrategyComponent } from './push-strategy.component';
import { PushStrategyHeaderComponent } from './push-strategy-header/push-strategy-header.component';
import { PushStrategyBodyComponent } from './push-strategy-body/push-strategy-body.component';
import { PushStrategyFooterComponent } from './push-strategy-footer/push-strategy-footer.component';

@NgModule({
  imports: [
    CommonModule,
    PushStrategyRoutingModule,
    SharedModule
  ],
  declarations: [PushStrategyComponent, PushStrategyHeaderComponent, PushStrategyBodyComponent, PushStrategyFooterComponent],
})
export class PushStrategyModule { }
