import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesOperatorComponent } from './observables-operator.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesOperatorRoutingModule { }
