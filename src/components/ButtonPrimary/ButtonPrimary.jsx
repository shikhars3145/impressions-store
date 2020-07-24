import React from 'react';

import './ButtonPrimary.scss';

export default function ButtonPrimary({ children, ...otherButtonProps }) {
  return (
    <button className="button-primary" {...otherButtonProps}>
      {children}
    </button>
  );
}
