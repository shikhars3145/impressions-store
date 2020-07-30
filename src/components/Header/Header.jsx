import React, { Fragment } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/FirebaseUtils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';

function Header({ currentUser, cartHidden }) {
  return (
    <div className="header">
      <Link className="logo" to="/">
        –<span className="company-name">IMPRESSIONS</span>–
      </Link>
      <ul className="nav">
        <Link className="nav-link" to="/shop">
          <li>SHOP</li>
        </Link>
        {currentUser ? (
          <span
            onClick={() => {
              auth.signOut();
            }}
            className="nav-link"
          >
            <li>SIGN OUT</li>
          </span>
        ) : (
          <Fragment>
            <Link className="nav-link" to="/authpage">
              <li>SIGN-IN</li>
            </Link>
            <Link className="nav-link" to="/authpage">
              <li>REGISTER</li>
            </Link>
          </Fragment>
        )}
        <CartIcon />
      </ul>
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStatetoProps)(Header);
