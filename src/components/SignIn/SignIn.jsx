import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

import './SignIn.scss';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I Already Have An Account</h1>
        <p>Sign in with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput label="Email" name="email" type="email" required />
          <FormInput
            label="Password"
            name="password"
            type="password"
            required
          />
          <ButtonPrimary type="submit">SIGN IN</ButtonPrimary>
        </form>
      </div>
    );
  }
}

export default SignIn;
