import React from 'react';
import './Banner.scss';
export default function Banner({ title, imageUrl, big }) {
  return (
    <div className={`banner ${big ? 'bigger' : ''}`}>
      <div
        className="bg"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
