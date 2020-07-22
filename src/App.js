import React, { Component, Fragment } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import MensPage from './pages/MensPage/MensPage';
import ShopPage from './pages/ShopPage/ShopPage';

import { Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mens" component={MensPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Fragment>
    );
  }
}

export default App;
