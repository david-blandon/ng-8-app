import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesBasicComponent } from './observables-basic.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesBasicRoutingModule { }
