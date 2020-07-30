import React, { Component, Fragment } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import MensPage from './pages/MensPage/MensPage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import { Route, Switch, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

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
          this.props.setCurrentUser({
            id: snapshot.id, //because data doesnt have id on it
            ...snapshot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mens" component={MensPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/authpage"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProp, mapDispatchToProps)(App);
