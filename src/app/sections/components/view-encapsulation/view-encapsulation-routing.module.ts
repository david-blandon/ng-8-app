import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEncapsulationComponent } from './view-encapsulation.component';

const routes: Routes = [
  {
    path: '',
    component: ViewEncapsulationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEncapsulationRoutingModule { }
