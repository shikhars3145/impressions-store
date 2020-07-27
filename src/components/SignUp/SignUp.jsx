import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

import { auth, createUserProfileDocument } from '../../firebase/FirebaseUtils';

import './SignUp.scss';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword, displayName } = this.state;

    if (!password === confirmPassword) {
      alert('Password and Confirm Password Dont Match');
      this.setState({ password: '', confirmPassword: '' });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log(error.message);
    }

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h1>I Dont Have An Account</h1>
        <p>Sign up with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Name"
            name="displayName"
            type="text"
            value={this.state.displayName}
            onChange={this.handleChange}
            required
          />
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
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            required
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <ButtonPrimary type="submit">SIGN UP</ButtonPrimary>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
