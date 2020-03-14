import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'template-driven',
        loadChildren: () => import('./template-driven/template-driven.module').then(module => module.TemplateDrivenModule)
      },
      {
        path: 'model-driven',
        loadChildren: () => import('./model-driven/model-driven.module').then(module => module.ModelDrivenModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
