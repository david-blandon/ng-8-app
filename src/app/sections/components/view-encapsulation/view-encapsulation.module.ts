import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';
import { ViewEncapsulationHeaderComponent } from './view-encapsulation-header/view-encapsulation-header.component';
import { ViewEncapsulationBodyComponent } from './view-encapsulation-body/view-encapsulation-body.component';
import { ViewEncapsulationFooterComponent } from './view-encapsulation-footer/view-encapsulation-footer.component';
import { ViewEncapsulationComponent } from './view-encapsulation.component';


@NgModule({
  imports: [
    CommonModule,
    ViewEncapsulationRoutingModule,
    SharedModule
  ],
  declarations: [ViewEncapsulationComponent, ViewEncapsulationHeaderComponent, ViewEncapsulationBodyComponent, ViewEncapsulationFooterComponent]
})
export class ViewEncapsulationModule { }
