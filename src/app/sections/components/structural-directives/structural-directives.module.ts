import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { StructuralDirectivesRoutingModule } from './structural-directives-routing.module';
import { StructuralDirectivesComponent } from './structural-directives.component';
import { StructuralDirectivesNgTemplateComponent } from './structural-directives-ng-template/structural-directives-ng-template.component';
import { StructuralDirectivesNgContainerComponent } from './structural-directives-ng-container/structural-directives-ng-container.component';


@NgModule({
  imports: [
    CommonModule,
    StructuralDirectivesRoutingModule,
    SharedModule
  ],
  declarations: [StructuralDirectivesComponent, StructuralDirectivesNgTemplateComponent, StructuralDirectivesNgContainerComponent]
})
export class StructuralDirectivesModule { }
