import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDrivenCustomValidationComponent } from './model-driven-custom-validation.component';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenCustomValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenCustomValidationRoutingModule { }
