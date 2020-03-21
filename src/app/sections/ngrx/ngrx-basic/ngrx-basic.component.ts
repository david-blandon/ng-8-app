import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable, Subscription, Subject } from 'rxjs';
import ToDoState from '../todo/store/todo.state';
import ToDo from '../todo/todo.model';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ShoppingItem } from './shopping.model';
import { ShoppingActionTypes, AddItemAction, RemoveItemAction } from './store/ngrx-basic.actions';

@Component({
  selector: 'app-ngrx-basic',
  templateUrl: './ngrx-basic.component.html',
  styleUrls: ['./ngrx-basic.component.scss']
})
export class NgRxBasicComponent implements OnInit {

  private _unsubscribeAll$: Subject<any>;
  private subs: Subscription;

  form: FormGroup;
  shoopingItems$: Observable<ShoppingItem[]>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit():void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      amount: [null, Validators.required],
    })

    this._unsubscribeAll$ = new Subject();

    this.shoopingItems$ = this.store.select('shopping');
    //this.subs = this.store.select('shopping').subscribe(result => console.log(result));
  }

  onSubmit():void {
    if (this.form.valid) {
      const shoppingItem: ShoppingItem = {
        id: Math.random().toString(),
        name: this.form.get('name').value,
        amount: this.form.get('amount').value,
      };

      this.store.dispatch(new AddItemAction(shoppingItem));

    } else {
      this.form.markAllAsTouched();
    }
  }

  onDelete(id: string):void {
    this.store.dispatch(new RemoveItemAction(id));
  }

  ngOnDestroy():void {
    if (this._unsubscribeAll$) {
      this._unsubscribeAll$.next();
      this._unsubscribeAll$.unsubscribe();
    }
  }

}

