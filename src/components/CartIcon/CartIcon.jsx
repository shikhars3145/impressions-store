import React from 'react';
import './CartIcon.scss';
import { ReactComponent as CartLogo } from './CartLogo.svg';
import { connect } from 'react-redux';
import { toggleCartDisplay } from '../../redux/cart/cartActions';
function CartIcon({ toggleHide }) {
  return (
    <div className="cart-icon" onClick={toggleHide}>
      <CartLogo className="cart-logo" />
      <span className="item-count">8</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleHide: () => dispatch(toggleCartDisplay()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
