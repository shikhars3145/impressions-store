import { cartActionTypes } from './cartTypes';

export const toggleCartDisplay = () => ({
  type: cartActionTypes.TOGGLE_CART_DISPLAY,
  payload: null,
});

export const addItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const decreaseItemQuantityFromCart = (item) => ({
  type: cartActionTypes.DECREASE_ITEM_QUANTITY_FROM_CART,
  payload: item,
});
