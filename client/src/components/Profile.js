/*

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  //const { name} = user;
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (

    isAuthenticated &&(
    <div>
        
        <h1 className=".UserMessage">{user.name}</h1>
        
        
        
    </div>
  )
  );
  
};


export default Profile;

//<h1>{user.email}</h1>
// <JSONPretty data={user}/>
//{JSON.stringify(user, null, 2)}

/*
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();

  return <div>Hello {user.name}</div>;
}

export default Profile;
*/

// src/views/profile.js

import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;