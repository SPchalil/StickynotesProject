import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Board from './Board.jsx';
import './StickyNotesApp.css';

import LogoutButton from './components/LogoutButton';
//import Profile from './components/Profile';

function StickyNotesApp() {
  let { userId } = useParams();
  const history = useHistory();
  //const handleClick = () => history.push('/logout');
  return (
    <div>
      <div className="UserMessage">
        
       
        <LogoutButton/>
    
      </div>
      <Board />
    </div>
  );
}
export default StickyNotesApp;
//<div >Hello, {<Profile/>}</div>
/*
<nav>
            <button
              className="logOutButton"
              type="button"
              onClick={handleClick}>
              <Link
                style={{ textDecoration: 'none' }}
                to="/logout">
                Logout
              </Link>
            </button>
          </nav>
*/