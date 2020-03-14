import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthSignupRoutingModule } from './auth-signup-routing.module';
import { AuthSignupComponent } from './auth-signup.component';

@NgModule({
  imports: [
    CommonModule,
    AuthSignupRoutingModule,
    FormsModule
  ],
  declarations: [AuthSignupComponent]
})
export class AuthSignupModule { }
