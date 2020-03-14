import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from './todo.action';
import ToDo from '../todo.model';
import ToDoState, { initializeState } from './todo.state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(ToDoActions.getToDoAction, state => state),
  on(ToDoActions.createToDoAction, (state: ToDoState, todo: ToDo) => {
    return { ...state, ToDos: [...state.ToDos, todo], ToDoError: null };
  }),

  on(ToDoActions.successGetToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, ToDos: payload, ToDoError: null };
  }),
  on(ToDoActions.successCreateToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, ToDos: [...state.ToDos, payload], ToDoError: null };
  }),
  on(ToDoActions.errorToDoAction, (state: ToDoState, error: Error) => {
    console.error(error);
    return { ...state, ToDoError: error };
  })
);

export function ToDoReducer(
  state: ToDoState | undefined,
  action: Action
): ToDoState {
  return reducer(state, action);
}
