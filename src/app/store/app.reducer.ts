import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from '../sections/ngrx/todo/store/todo.reducer';
import * as fromTodoState from '../sections/ngrx/todo/store/todo.state';

import * as fromAuth from '../sections/auth/store/auth.reducer';

export interface AppState {
  auth: fromAuth.State;
  todo: fromTodoState.default;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  todo: fromTodo.ToDoReducer,
};
