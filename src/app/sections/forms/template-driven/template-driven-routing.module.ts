import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./template-driven-basic/template-driven-basic.module').then(module => module.TemplateDrivenBasicModule)
      },
      {
        path: 'validation',
        loadChildren: () => import('./template-driven-validation/template-driven-validation.module').then(module => module.TemplateDrivenValidationModule)
      },  
      {
        path: 'grouping',
        loadChildren: () => import('./template-driven-grouping/template-driven-grouping.module').then(module => module.TemplateDrivenGroupingModule)
      },  
      {
        path: 'setting-patching',
        loadChildren: () => import('./template-driven-setting-patching/template-driven-setting-patching.module').then(module => module.TemplateDrivenSettingPatchingModule)
      },                
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenRoutingModule { }
