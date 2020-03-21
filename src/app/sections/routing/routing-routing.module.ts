import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingCanDeactivateComponent } from './routing-can-deactivate/routing-can-deactivate.component';
import { CanDeactivateGuard } from './routing-can-deactivate/can-deactivate-guard.service';
import { RoutingResolveComponent } from './routing-resolve/routing-resolve.component';
import { RoutingResolver } from './routing-resolve/routing-resolver.service';
import { RoutingChildModule } from './routing-child/routing-child.module';
import { RoutingChildComponent } from './routing-child/routing-child.component';
import { RoutingChildFormComponent } from './routing-child/routing-child-form/routing-child-form.component';
import { RoutingChildViewComponent } from './routing-child/routing-child-view/routing-child-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'can-deactivate', component: RoutingCanDeactivateComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'resolve/:id', component: RoutingResolveComponent, resolve: {server: RoutingResolver}},
    ]
  },
  {
    path: 'child',
    component: RoutingChildComponent
  },
  {
    path: 'child/:id/edit',
    component: RoutingChildFormComponent
  },
  {
    path: 'child/:id/view',
    component: RoutingChildViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RoutingChildModule],
  exports: [RouterModule, RoutingChildModule]
})
export class RoutingRoutingModule { }
