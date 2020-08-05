import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({ price }) {
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="IMPRESSIONS Store"
      billingAddress
      shippingAddress
      image={`${process.env.PUBLIC_URL}/favicon.ico`}
      description={`Your total is Rs.${price}`}
      amount={price}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
