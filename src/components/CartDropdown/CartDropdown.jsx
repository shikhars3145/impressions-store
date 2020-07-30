import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

import './CartDropdown.scss';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDisplay } from '../../redux/cart/cartActions';

function CartDropdown({ cartItems, history, dispatch }) {
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
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartDisplay());
        }}
      >
        GO TO CHECKOUT
      </ButtonPrimary>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
