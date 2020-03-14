import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../user.model';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponse>;

    this.isLoading = true;

    this.authService.signin(email, password)
      .subscribe(
        response => {
          console.log(response);
          this.isLoading = false;
          this.router.navigate(['/']);
        },
        errorMessage => {
          console.log(errorMessage);
          this.isLoading = false;
        }
      );

    form.reset();
  }
}
