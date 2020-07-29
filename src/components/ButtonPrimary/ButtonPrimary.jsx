import React from 'react';

import './ButtonPrimary.scss';

export default function ButtonPrimary({ children, white,...otherButtonProps }) {
  return (
    <button className={`button-primary ${white?'white':''}`} {...otherButtonProps}>
      {children}
    </button>
  );
}
