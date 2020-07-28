import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

import './CartDropdown.scss';

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <ButtonPrimary
        style={{
          padding: '0',
        }}
      >
        GO TO CHECKOUT
      </ButtonPrimary>
    </div>
  );
}
