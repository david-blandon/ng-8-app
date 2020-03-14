import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
