import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import ToDoState from './store/todo.state';
import { Observable, Subscription } from 'rxjs';
import * as ToDoActions from './store/todo.action';
import ToDo from './todo.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  form: FormGroup;
  todo$: Observable<ToDoState>;
  subscription: Subscription;
  toDoList: ToDo[] = [];

  todoError: Error = null;

  constructor(
    private store: Store<{ todo: ToDoState }>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      isCompleted: [false]
    })

    this.todo$ = this.store.pipe(select('todo'));

    this.subscription = this.todo$
      .pipe(
        map(data => {
          this.toDoList = data ? data.ToDos : [];
          this.todoError = data ? data.ToDoError : null;
        })
      )
      .subscribe();

    this.store.dispatch(ToDoActions.beginGetToDoAction());
  }

  onSubmit() {
    if (this.form.valid) {
      const todo: ToDo = { title: this.form.get('name').value, isCompleted: this.form.get('isCompleted').value };
      this.store.dispatch(ToDoActions.beginCreateToDoAction({ payload: todo }));
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
