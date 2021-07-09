import React from 'react';
//import './Register.css';

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="logInButton" style={{ Color: 'blue' }} onClick={() => loginWithRedirect()}>
            Log In
        </button>

    )
}

export default LoginButton;