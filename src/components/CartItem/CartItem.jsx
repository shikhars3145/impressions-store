import React from 'react';

import './CartItem.scss';

function CartItem({ item: { name, price, quantity, imageUrl } }) {
  return (
    <div className="cart-item">
      <div
        className="img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="details">
        <div className="name">{name}</div>
        <div className="price">
          {quantity} X Rs.{price}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
