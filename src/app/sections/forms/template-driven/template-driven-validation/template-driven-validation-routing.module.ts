import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenValidationComponent } from './template-driven-validation.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenValidationRoutingModule { }
