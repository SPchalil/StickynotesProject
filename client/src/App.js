import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./Home";
import LogIn from "./LogIn";
import StickyNotesApp from './StickyNotesApp';
import Register from './Register';
import Thanks from './Thanks';
import Logout from './Logout';

import {Profile} from "./views";
import ProtectedRoute from "./protected-route";

import './index.css';
import './StickyNotesApp.css';

function App() {

    const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }


    return (
        <div>
            <Switch>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/stickynotesapp/:userId">
                    <StickyNotesApp />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/registered">
                    <Thanks />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
                
                <Route path="/">
                    <Home />
                </Route>
                <ProtectedRoute path="/profile" component={Profile} />
            </Switch>
        </div>
    );
}

export default App;