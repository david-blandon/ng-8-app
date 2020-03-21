import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'databinding',
        loadChildren: () => import('./databinding/databinding.module').then(module => module.DatabindingModule)
      },
      {
        path: 'push-strategy',
        loadChildren: () => import('./push-strategy/push-strategy.module').then(module => module.PushStrategyModule)
      },
      {
        path: 'structural-directives',
        loadChildren: () => import('./structural-directives/structural-directives.module').then(module => module.StructuralDirectivesModule)
      },
      {
        path: 'view-encapsulation',
        loadChildren: () => import('./view-encapsulation/view-encapsulation.module').then(module => module.ViewEncapsulationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
