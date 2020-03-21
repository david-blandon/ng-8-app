import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { AuthResponse } from './user.model';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStoreService {

  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        environment.firebase.authDomain + 'accounts:signUp?key=' + environment.firebase.apiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
  }

  signin(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        environment.firebase.authDomain + 'accounts:signInWithPassword?key=' + environment.firebase.apiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
  }

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
