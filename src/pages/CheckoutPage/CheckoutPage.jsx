import React from 'react';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';
import { connect } from 'react-redux';

import './CheckoutPage.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-column-title">Product</div>
          <div className="header-column-title">Description</div>
          <div className="header-column-title">Quantity</div>
          <div className="header-column-title">Price</div>
          <div className="header-column-title">Remove</div>
        </div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <div className="total">TOTAL: Rs. {total}</div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(CheckoutPage);
