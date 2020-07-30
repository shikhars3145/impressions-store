import React from 'react';
import './CartIcon.scss';
import { ReactComponent as CartLogo } from './CartLogo.svg';
import { connect } from 'react-redux';
import { toggleCartDisplay } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
function CartIcon({ toggleHide, count }) {
  return (
    <div className="cart-icon" onClick={toggleHide}>
      <CartLogo className="cart-logo" />
      <span className="item-count">{count}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleHide: () => dispatch(toggleCartDisplay()),
});

const mapStateToProps = createStructuredSelector({
  count: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
