import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

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

    this.isLoading = true;

    this.authService.signup(email, password)
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
