import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'basic',
      //   loadChildren: () => import('./observables-basic/observables-basic.module').then(module => module.ObservablesBasicModule)
      // },
      // {
      //   path: 'operator',
      //   loadChildren: () => import('./observables-operator/observables-operator.module').then(module => module.ObservablesOperatorModule)
      // },
      // {
      //   path: 'subject',
      //   loadChildren: () => import('./observables-subject/observables-subject.module').then(module => module.ObservablesSubjectModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
