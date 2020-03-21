import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ShoppingEffectActionTypes,
  ShoppItemEffectAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  LoadingItemAction,
  LoadingItemSuccessAction,
  LoadingItemFailureAction
} from './ngrx-effect.actions';
import { switchMap, mergeMap, map, catchError, tap } from 'rxjs/operators';
import { NgRxEffectService } from '../ngrx-effect.service';
import { of } from 'rxjs';

@Injectable()
export class ShoppingEffect {

  @Effect()
  addShoppingItem$ = this.actions$.pipe(
    ofType(ShoppingEffectActionTypes.ADD_ITEM),
    switchMap((action: AddItemAction) => {
      return this.service.create(action.payload).pipe(
        map(() => new AddItemSuccessAction(action.payload)),
        catchError(error => of(new AddItemFailureAction(error)))
      )
    })
  );

  @Effect()
  loadShoppingItems$ = this.actions$.pipe(
    ofType(ShoppingEffectActionTypes.LOADING_ITEM),
    switchMap((action: LoadingItemAction) => {
      return this.service.getAll().pipe(
        map(data => new LoadingItemSuccessAction(data)),
        catchError(error => of(new LoadingItemFailureAction(error)))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private service: NgRxEffectService
  ) { }

}
