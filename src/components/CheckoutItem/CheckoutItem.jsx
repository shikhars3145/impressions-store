import React from 'react';

import './CheckoutItem.scss';

function CheckoutItem({ item }) {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">Rs.{price}</div>
      <div className="remove-btn">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
