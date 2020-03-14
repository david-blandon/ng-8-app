import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenGroupingComponent } from './template-driven-grouping.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenGroupingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenGroupingRoutingModule { }
