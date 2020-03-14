import { NgModule, LOCALE_ID } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './shared/interceptors/jwt-interceptor.service';
import { ErrorInterceptorService } from './shared/interceptors/error-interceptor.service';



// Load all required data for the ES locale

@NgModule({
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptorService,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptorService,
    //   multi: true
    // },
  ]
})
export class CoreModule {}
