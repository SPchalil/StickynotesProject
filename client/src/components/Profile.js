

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user } = useAuth0();
  console.log(user);
  const { name} = user;
  
  return (
    <div>
        
        <h2>{name}</h2>
        <JSONPretty data={user}/>
        
        
    </div>
    
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