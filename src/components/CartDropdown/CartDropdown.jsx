import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

import './CartDropdown.scss';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-cart-msg">YOUR CART IS EMPTY</span>
        )}
      </div>
      <ButtonPrimary
        style={{
          padding: '0',
          borderColor: '#000',
        }}
      >
        GO TO CHECKOUT
      </ButtonPrimary>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
