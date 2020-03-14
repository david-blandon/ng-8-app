import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDrivenReactiveComponent } from './model-driven-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenReactiveRoutingModule { }
