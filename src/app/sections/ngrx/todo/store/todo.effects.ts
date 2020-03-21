import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ToDoActions from './todo.action';
import ToDo from '../todo.model';
import { TodoService } from '../todo.service';

@Injectable()
export class ToDoEffects {
  constructor(private todoService: TodoService, private action$: Actions) {}

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.beginGetToDoAction),
      mergeMap(action =>
        this.todoService.getToDos().pipe(
          map((data: ToDo[]) => {

            return ToDoActions.successGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.errorToDoAction(error));
          })
        )
      )
    )
  );

  CreateToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.beginCreateToDoAction),
      mergeMap(action =>
        this.todoService.createToDos(action.payload).pipe(
          map((data: ToDo) => {
            return ToDoActions.successCreateToDoAction({ payload: action.payload });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.errorToDoAction(error));
          })
        )
      )
    )
  );
}
