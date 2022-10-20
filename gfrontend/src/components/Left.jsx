import React from "react";
import myimage from "../images/myimage.png";
import {MdInsertEmoticon} from 'react-icons/md'

function Left() {
  return (
    <div className="left">
      <div className="image">
        <img src={myimage} alt="myimage" />

        <div className="emoticon-box">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>

      <div className="left-details">
        <h2>Sephens</h2>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Left;
