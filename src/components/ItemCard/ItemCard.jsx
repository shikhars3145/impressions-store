import React from 'react';
import './ItemCard.scss';

export default function ItemCard({ name, imageUrl, price }) {
  return (
    <div className="item-card">
      <div
        className="item-card_image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="item-card_footer">
        <div className="name">{name}</div>
        <div className="price">Rs.{price}</div>
      </div>
    </div>
  );
}
