import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AuthSignupComponent} from './auth-signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSignupComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)    
  ],
  exports: [RouterModule]
})
export class AuthSignupRoutingModule { }
