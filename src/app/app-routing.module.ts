import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { AuthGuard } from './sections/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full'
      },
      {
        path: 'components',
        loadChildren: () => import('./sections/components/components.module').then(module => module.ComponentsModule)
      },
      {
        path: 'routing',
        loadChildren: () => import('./sections/routing/routing.module').then(module => module.RoutingModule)
      },
      {
        path: 'ngrx',
        loadChildren: () => import('./sections/ngrx/ngrx.module').then(module => module.NgRxModule)
      },
      {
        path: 'observables',
        //canActivate: [AuthGuard],
        loadChildren: () => import('./sections/observables/observables.module').then(module => module.ObservablesModule)
      },
      {
        path: 'forms',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./sections/forms/forms.module').then(module => module.FormsModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./sections/auth/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'forms'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
