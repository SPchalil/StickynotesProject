import React from 'react';
import postit from './postit.png';
import './index.css';
import './StickyNotesApp.css';
import { Link } from 'react-router-dom';

import LoginButton from './components/LoginButton';
import SignUpButton from './components/SignUpButton';
import LogoutButton from './components/LogoutButton';
import AuthenticationButton from './components/authentication-button';
//import Profile from './components/Profile';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header
                        className="App-board" onClick={(e) => e.stopPropagation()}>
                        <img src={postit} className="App-logo" alt="postit" />
                        <div className="heading"> <h1>Sticky Notes App</h1> </div>
                        <div className="ref">
                            <h2 className="name"> .. by Swapna
                                <a className="link" href="https://github.com/SPchalil/React-StickyNotes"> github </a>
                            </h2>
                        </div>
                        <br/>
                        <div className="formButtons">
                            
                            <LoginButton/> 
                            <div><h5 style={{ color: "black" }}>New User ?</h5></div>
                            <SignUpButton/>
                            
                            
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Home;
// <LoginButton/>
//<AuthenticationButton/>
//<Link to = "/stickynotesapp/:userId"><LoginButton/></Link>
/*---Before adding Auth0 library----------
<nav>
    <ul>
        <button className="logInButton" ><Link style={{ textDecoration: 'none', color: '#FFF' }} to="/login">Log In</Link></button>
        <div><h5 style={{ color: "black" }}>New User ?</h5></div>
        <button className="createNewButton" ><Link style={{ textDecoration: 'none', color: 'blue' }} to="/register">Create New Account</Link></button>
    </ul>
</nav>
<Link to="/logout">
                                <LogoutButton/>
                            </Link>
----------------------------------------*/