import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { take, exhaustMap, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromApp from '../../../app/store/app.reducer';
import * as AuthActions from '../../sections/auth/store/auth.actions';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("ErrorInterceptorService");

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.store.dispatch(new AuthActions.Logout());
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
