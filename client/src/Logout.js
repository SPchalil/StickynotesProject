import React from 'react';
import postit from './postit.png';
import './index.css';
import './StickyNotesApp.css';
//import Home from "./Home";
import { Link } from 'react-router-dom';

import LoginButton from "./components/LoginButton";

class Logout extends React.Component {

    render() {
        return (
            <div>
                <div className="App">
                    <header
                        className="App-board" onClick={(e) => e.stopPropagation()}>

                        <img src={postit} className="App-logo" alt="postit" />
                        <div className="heading"> <h1>You're logged Out!</h1> </div>
                        

                        <div className="formButtons">
                            <nav>
                                

                                <LoginButton/>
                                <button className = "homeButton" ><Link style={{ textDecoration: 'none',  color: '#FFF' }} to="/">Home</Link></button>

                                
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Logout;

//<button className = "logInButton" ><Link style={{ textDecoration: 'none',  color: '#FFF' }} to="/login">Log In</Link></button>