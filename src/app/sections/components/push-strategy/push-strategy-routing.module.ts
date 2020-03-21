import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushStrategyComponent } from './push-strategy.component';

const routes: Routes = [
  {
    path: '',
    component: PushStrategyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PushStrategyRoutingModule { }
