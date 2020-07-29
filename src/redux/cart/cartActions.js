import { cartActionTypes } from './cartTypes';

export const toggleCartDisplay = () => ({
  type: cartActionTypes.TOGGLE_CART_DISPLAY,
  payload: null,
});

export const addItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item
})
