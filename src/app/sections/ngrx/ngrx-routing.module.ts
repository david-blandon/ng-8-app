import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./ngrx-basic/ngrx-basic.module').then(module => module.NgRxBasicModule)
      },
      {
        path: 'effect',
        loadChildren: () => import('./ngrx-effect/ngrx-effect.module').then(module => module.NgRxEffectModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('./todo/todo.module').then(module => module.TodoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxRoutingModule { }
