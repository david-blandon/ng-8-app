import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DatabindingRoutingModule } from './databinding-routing.module';
import { DatabindingComponent } from './databinding.component';
import { CockpitComponent } from './databinding-cockpit/cockpit.component';
import { ServerElementComponent } from './databinding-server-element/server-element.component';


@NgModule({
  imports: [
    CommonModule,
    DatabindingRoutingModule,
    SharedModule
  ],
  declarations: [DatabindingComponent, CockpitComponent, ServerElementComponent]
})
export class DatabindingModule { }
