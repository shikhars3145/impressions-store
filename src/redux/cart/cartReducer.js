import { cartActionTypes } from './cartTypes';
import { addItemToCartUtil } from './cartUtils';

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

    default:
      return state;
  }
};

export default cartReducer;