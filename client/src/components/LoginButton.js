import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button style={{ Color: 'blue' }} onClick={() => loginWithRedirect()}>
            Log In
        </button>

    )
}

export default LoginButton;