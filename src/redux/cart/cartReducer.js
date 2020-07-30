import { cartActionTypes } from './cartTypes';
import {
  addItemToCartUtil,
  decreaseItemQuantityFromCartUtil,
} from './cartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DISPLAY:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case cartActionTypes.DECREASE_ITEM_QUANTITY_FROM_CART:
      return {
        ...state,
        cartItems: decreaseItemQuantityFromCartUtil(
          state.cartItems,
          action.payload
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
