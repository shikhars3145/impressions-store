import React, { Component, Fragment } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import MensPage from './pages/MensPage/MensPage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import { Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // updating unsubscribeFromAuth from null to function object
    // onAuthStateChange calls inside function everytime user signs in or out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if user signed in
      // 1. create a userprofileDocument if not already made
      // 2. store that document in app state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //runs once at start then everytime document is updated
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id, //because data doesnt have id on it
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
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
