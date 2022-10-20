import React from "react";
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
      <div className="menu-container">
        <p>
          Signed in as <br />
          Sephens
        </p>

        <div className="line-three" />

        <div className="menu-status">
            <input type="text" placeholder="Set Status"/>
        </div>

        <div className="line-three" />

        <p>
            <Link to="/Profile">Your Profile</Link>
        </p>

        <p>Your Repositories</p>
        <p>Your codespaces</p>
        <p>Your organizations</p>
        <p>Your projects</p>
        <p>Your stars</p>
        <p>Your gists</p>

        <div className="line-three" />

        <p>Upgrade</p>
        <p>Feature preview</p>
        <p>Help</p>
        <p>Settings</p>

        <div className="line-three" />

        <p>Sign Out</p>

      </div>
    </div>
  );
}

export default Menu;
