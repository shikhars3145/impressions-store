import React, { Fragment } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/FirebaseUtils';
import { connect } from 'react-redux';

function Header({ currentUser }) {
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
      </ul>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStatetoProps)(Header);
