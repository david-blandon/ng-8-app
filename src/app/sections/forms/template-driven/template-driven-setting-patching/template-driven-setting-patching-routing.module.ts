import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenSettingPatchingComponent } from './template-driven-setting-patching.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenSettingPatchingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenSettingPatchingRoutingModule { }
