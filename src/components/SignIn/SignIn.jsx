import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

import { signInwithGoogle } from '../../firebase/FirebaseUtils';

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
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I Already Have An Account</h1>
        <p>Sign in with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <ButtonPrimary type="submit">SIGN IN</ButtonPrimary>
            <ButtonPrimary type="button" onClick={signInwithGoogle}>
              SIGN IN WITH GOOGLE
            </ButtonPrimary>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
