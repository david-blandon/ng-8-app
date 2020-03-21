
import { ShoppItemEffectAction, ShoppingEffectActionTypes } from "./ngrx-effect.actions"
import { ShoppingItem } from '../../ngrx-basic/shopping.model';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: null
};

export function ShoppingEffectReducer(state: ShoppingState = initialState, action: ShoppItemEffectAction) {
  switch (action.type) {

    case ShoppingEffectActionTypes.LOADING_ITEM:
      return {
        ...state,
        loading: true,
        error: null
      }

    case ShoppingEffectActionTypes.LOADING_ITEM_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null
      }

    case ShoppingEffectActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ShoppingEffectActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
        error: null
      };

    case ShoppingEffectActionTypes.ADD_ITEM_FAILURE:
    case ShoppingEffectActionTypes.LOADING_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ShoppingEffectActionTypes.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter((item: ShoppingItem) => item.id !== action.payload)
      };
    default:
      return state;
  }
}
