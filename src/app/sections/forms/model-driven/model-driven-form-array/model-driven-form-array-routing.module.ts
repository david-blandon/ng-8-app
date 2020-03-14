import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDrivenFormArrayComponent } from './model-driven-form-array.component';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenFormArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenFormArrayRoutingModule { }
