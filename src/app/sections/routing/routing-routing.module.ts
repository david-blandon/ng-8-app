import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingCanDeactivateComponent } from './routing-can-deactivate/routing-can-deactivate.component';
import { CanDeactivateGuard } from './routing-can-deactivate/can-deactivate-guard.service';
import { RoutingResolveComponent } from './routing-resolve/routing-resolve.component';
import { RoutingResolver } from './routing-resolve/routing-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'can-deactivate', component: RoutingCanDeactivateComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'resolve/:id', component: RoutingResolveComponent, resolve: {server: RoutingResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
