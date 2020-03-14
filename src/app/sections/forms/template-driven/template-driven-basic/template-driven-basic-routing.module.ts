import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenBasicComponent } from './template-driven-basic.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenBasicRoutingModule { }
