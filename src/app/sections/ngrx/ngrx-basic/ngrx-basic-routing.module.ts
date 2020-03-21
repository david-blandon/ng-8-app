import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgRxBasicComponent } from './ngrx-basic.component';

const routes: Routes = [
  {
    path: '',
    component: NgRxBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxBasicRoutingModule { }
