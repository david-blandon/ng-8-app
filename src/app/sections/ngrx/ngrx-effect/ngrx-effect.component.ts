import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ShoppingItem } from '../ngrx-basic/shopping.model';
import { AddItemAction, LoadingItemAction } from './store/ngrx-effect.actions';

@Component({
  selector: 'app-ngrx-effect',
  templateUrl: './ngrx-effect.component.html',
  styleUrls: ['./ngrx-effect.component.scss']
})
export class NgRxEffectComponent implements OnInit {

  private _unsubscribeAll$: Subject<any>;

  form: FormGroup;

  shoopingItems$: Observable<ShoppingItem[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      amount: [null, Validators.required],
    })

    this._unsubscribeAll$ = new Subject();

    this.shoopingItems$ = this.store.select(store => store.shoppingEffect.list);
    this.loading$ = this.store.select(store => store.shoppingEffect.loading);
    this.error$ = this.store.select(store => store.shoppingEffect.error);

    this.store.dispatch(new LoadingItemAction());
  }

  onSubmit(): void {
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

  onDelete(id: string): void {

  }

  ngOnDestroy(): void {
    if (this._unsubscribeAll$) {
      this._unsubscribeAll$.next();
      this._unsubscribeAll$.unsubscribe();
    }
  }

}

