import { ShoppingItem } from "../shopping.model";
import { ShoppItemAction, ShoppingActionTypes } from "./ngrx-basic.actions"

const initialState : ShoppingItem[] = [
  {
    id: '1599',
    name: 'Tomate',
    amount: 1
  }
];

export function ShoppingReducer(state: ShoppingItem[] = initialState, action: ShoppItemAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];

    case ShoppingActionTypes.REMOVE_ITEM:
      return state.filter((item: ShoppingItem) => item.id !== action.payload);
    default:
      return state;
  }
}
