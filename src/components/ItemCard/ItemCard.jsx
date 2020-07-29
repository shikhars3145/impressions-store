import React from 'react';
import './ItemCard.scss';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';

function ItemCard({addItemToCart,item}) {
  const { name, imageUrl, price } = item;
  return (
    <div className="item-card">
      <div
        className="item-card_image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
      </div>
      <div className="item-card_footer">
        <div className="name">{name}</div>
        <div className="price">Rs.{price}</div>
      </div>
      <ButtonPrimary onClick={() => addItemToCart(item)} white>ADD TO CART</ButtonPrimary>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(null,mapDispatchToProps)(ItemCard)