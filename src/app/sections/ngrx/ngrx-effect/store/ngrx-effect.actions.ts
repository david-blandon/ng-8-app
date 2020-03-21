import { Action } from '@ngrx/store';
import { ShoppingItem } from '../../ngrx-basic/shopping.model';

export enum ShoppingEffectActionTypes {
  ADD_ITEM = '[SHOPPING EFFECT] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING EFFECT] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING EFFECT] Add Item Failure',

  LOADING_ITEM = '[SHOPPING EFFECT] Load Item',
  LOADING_ITEM_SUCCESS = '[SHOPPING EFFECT] Load Item Success',
  LOADING_ITEM_FAILURE = '[SHOPPING EFFECT] Load Item Failure',

  REMOVE_ITEM = '[SHOPPING] Remove Item',
}

/**
 * ADD
 */

export class AddItemAction implements Action {
  readonly type = ShoppingEffectActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) { }
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingEffectActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) { }
}

export class AddItemFailureAction implements Action {
  readonly type = ShoppingEffectActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) { }
}



/**
 * LOADING
 */

export class LoadingItemAction implements Action {
  readonly type = ShoppingEffectActionTypes.LOADING_ITEM;
}

export class LoadingItemSuccessAction implements Action {
  readonly type = ShoppingEffectActionTypes.LOADING_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem[]) { }
}

export class LoadingItemFailureAction implements Action {
  readonly type = ShoppingEffectActionTypes.LOADING_ITEM_FAILURE;

  constructor(public payload: Error) { }
}




/**
 * REMOVE
 */
export class RemoveItemAction implements Action {
  readonly type = ShoppingEffectActionTypes.REMOVE_ITEM;

  constructor(public payload: string) { }
}

export type ShoppItemEffectAction =
  AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  LoadingItemAction |
  LoadingItemSuccessAction |
  LoadingItemFailureAction |
  RemoveItemAction;
