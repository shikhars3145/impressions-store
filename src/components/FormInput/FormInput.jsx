import React from 'react';

import './FormInput.scss';

export default function FormInput({ label, placeholder, ...otherFormProps }) {
  return (
    <div className="form-input">
      <input
        placeholder={placeholder ? placeholder : ' '}
        {...otherFormProps}
      />
      {label ? <label>{label}</label> : null}
    </div>
  );
}
