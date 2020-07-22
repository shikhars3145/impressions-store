import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        –<span className="company-name">IMPRESSIONS</span>–
      </Link>
      <ul className="nav">
        <Link className="nav-link" to="/shop">
          <li>SHOP</li>
        </Link>
        <Link className="nav-link" to="/shop">
          <li>SIGN-IN</li>
        </Link>
        <Link className="nav-link" to="/shop">
          <li>REGISTER</li>
        </Link>
      </ul>
    </div>
  );
}
