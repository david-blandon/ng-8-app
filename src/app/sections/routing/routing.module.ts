import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RoutingRoutingModule } from './routing-routing.module';
import { RoutingCanDeactivateComponent } from './routing-can-deactivate/routing-can-deactivate.component';
import { RoutingResolveComponent } from './routing-resolve/routing-resolve.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule,
    SharedModule
  ],
  declarations: [RoutingCanDeactivateComponent, RoutingResolveComponent]
})
export class RoutingModule { }
