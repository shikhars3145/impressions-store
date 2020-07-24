import React, { Component, Fragment } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import MensPage from './pages/MensPage/MensPage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import { Route } from 'react-router-dom';

import { auth } from './firebase/FirebaseUtils';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mens" component={MensPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/authpage" component={AuthPage} />
      </Fragment>
    );
  }
}

export default App;
