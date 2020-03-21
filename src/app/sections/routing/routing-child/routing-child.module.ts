import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RoutingChildRoutingModule } from './routing-child-routing.module';
import { RoutingChildComponent } from './routing-child.component';
import { RoutingChildSidebarComponent } from './routing-child-sidebar/routing-child-sidebar.component';
import { RoutingChildViewComponent } from './routing-child-view/routing-child-view.component';
import { RoutingChildFormComponent } from './routing-child-form/routing-child-form.component';
import { RoutingChildService } from './routing-child.service';


@NgModule({
  imports: [
    CommonModule,
    RoutingChildRoutingModule,
    SharedModule
  ],
  declarations: [RoutingChildComponent, RoutingChildSidebarComponent, RoutingChildViewComponent, RoutingChildFormComponent],
  providers: [RoutingChildService]
})
export class RoutingChildModule { }
