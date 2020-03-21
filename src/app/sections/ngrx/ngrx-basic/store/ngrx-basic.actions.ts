import { Action } from '@ngrx/store';
import { ShoppingItem } from '../shopping.model';


export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  REMOVE_ITEM = '[SHOPPING] Remove Item',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload:ShoppingItem) {}
}

export class RemoveItemAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;

  constructor(public payload:string) {}
}

export type ShoppItemAction = AddItemAction | RemoveItemAction;
