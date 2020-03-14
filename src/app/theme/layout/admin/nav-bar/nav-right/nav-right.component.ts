import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/sections/auth/authentication.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { User } from 'src/app/sections/auth/user.model';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  user: User;

  private _unsubscribeAll$: Subject<any>;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this._unsubscribeAll$ = new Subject();

    this.authService.user
      .pipe(
        takeUntil(this._unsubscribeAll$)
      )
      .subscribe(
        (user) => {
          this.isAuthenticated = !!user;
          this.user = user;
        }
      );
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this._unsubscribeAll$) {
      this._unsubscribeAll$.next();      
      this._unsubscribeAll$.unsubscribe();
    }
  }
}