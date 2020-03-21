import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgRxEffectComponent } from './ngrx-effect.component';

const routes: Routes = [
  {
    path: '',
    component: NgRxEffectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxEffectRoutingModule { }
