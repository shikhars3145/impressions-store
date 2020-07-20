import React, { Component, Fragment } from 'react';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Homepage />
      </Fragment>
    );
  }
}

export default App;
