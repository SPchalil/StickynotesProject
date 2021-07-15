

import React from 'react';
//import './Register.css';

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="logInButton" onClick={() => loginWithRedirect()}>
            Log In
        </button>

    )
}

export default LoginButton;


/*
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button className="logInButton" onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;
*/