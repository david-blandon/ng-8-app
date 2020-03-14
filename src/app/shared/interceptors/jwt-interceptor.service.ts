import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { take, exhaustMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../app/store/app.reducer';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("AuthInterceptorService");
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          setHeaders: { "Authorization": "Bearer " +  user.token}
        });
        console.log("AuthInterceptorService", user.token);
        return next.handle(modifiedReq);
      })
    );
  }
}
