import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDrivenBasicComponent } from './model-driven-basic.component';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenBasicRoutingModule { }
