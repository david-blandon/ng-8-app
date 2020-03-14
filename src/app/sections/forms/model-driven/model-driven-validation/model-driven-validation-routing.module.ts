import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDrivenValidationComponent } from './model-driven-validation.component';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenValidationRoutingModule { }
