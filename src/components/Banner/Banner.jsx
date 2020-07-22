import React from 'react';
import './Banner.scss';

import { withRouter } from 'react-router-dom';

function Banner({ title, imageUrl, bgPos, big, history, match }) {
  return (
    <div
      className={`banner ${big ? 'bigger' : ''}`}
      onClick={() => history.push(`${match.url}${title}`)}
    >
      <div
        className="bg"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${imageUrl})`,
          backgroundPosition: `${bgPos}`,
        }}
      ></div>
      <div className="content">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default withRouter(Banner);
