import React from 'react';

import './CheckoutItem.scss';
import { connect } from 'react-redux';
import {
  removeItemFromCart,
  addItemToCart,
  decreaseItemQuantityFromCart,
} from '../../redux/cart/cartActions';

function CheckoutItem({ item, removeItem, plus, minus }) {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span
          className="minus"
          onClick={() => {
            if (item.quantity === 1) return removeItem(item);
            else return minus(item);
          }}
        >
          &#10096;
        </span>{' '}
        {quantity}{' '}
        <span className="plus" onClick={() => plus(item)}>
          &#10097;
        </span>
      </div>
      <div className="price">Rs.{price}</div>
      <div onClick={() => removeItem(item)} className="remove-btn">
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  plus: (item) => dispatch(addItemToCart(item)),
  minus: (item) => dispatch(decreaseItemQuantityFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
