import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingChildComponent } from './routing-child.component';
import { RoutingChildViewComponent } from './routing-child-view/routing-child-view.component';
import { RoutingChildFormComponent } from './routing-child-form/routing-child-form.component';


const routes: Routes = [
  {
    path: '',
    component: RoutingChildComponent
  },
  {
    path: ':id/edit',
    component: RoutingChildFormComponent
  },
  {
    path: ':id/view',
    component: RoutingChildViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingChildRoutingModule { }
