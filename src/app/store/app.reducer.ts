import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from '../sections/ngrx/todo/store/todo.reducer';
import * as fromTodoState from '../sections/ngrx/todo/store/todo.state';

import * as fromAuth from '../sections/auth/store/auth.reducer';

import * as fromShopping from '../sections/ngrx/ngrx-basic/store/ngrx-basic.redures';
import * as fromShoppingEffect from '../sections/ngrx/ngrx-effect/store/ngrx-effect.redures';

import { ShoppingItem } from '../sections/ngrx/ngrx-basic/shopping.model';

export interface AppState {
  auth: fromAuth.State;
  todo: fromTodoState.default;
  shopping: ShoppingItem[],
  shoppingEffect: fromShoppingEffect.ShoppingState
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  todo: fromTodo.ToDoReducer,
  shopping: fromShopping.ShoppingReducer,
  shoppingEffect: fromShoppingEffect.ShoppingEffectReducer
};
