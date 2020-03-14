import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesSubjectComponent } from './observables-subject.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesSubjectRoutingModule { }
