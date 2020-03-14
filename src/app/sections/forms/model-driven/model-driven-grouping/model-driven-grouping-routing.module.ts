import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDrivenGroupingComponent } from './model-driven-grouping.component';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenGroupingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenGroupingRoutingModule { }
