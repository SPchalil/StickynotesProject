// src/components/logout-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;


/*
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../StickyNotesApp.css';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button className="logOutButton" onClick={() => {
      logout({ returnTo: "http://localhost:3000/logout" });
    }}>Log out</button>
  );
}

export default LogoutButton;

//<Link to = "/stickynotesapp/:userId"><LoginButton/></Link>
/*
<button className="logInButton" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
    */