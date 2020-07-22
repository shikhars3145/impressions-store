import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './AuthPage.scss';

export default function AuthPage() {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
}
