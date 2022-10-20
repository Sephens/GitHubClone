import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import myimage from "../images/myimage.png";
import list from "../list.json";
import { Link } from "react-router-dom";

function MainLeft() {
  return (
    <div className="main-left-container">
      <div className="main-left">
        <div className="main-left-name">
          <img src={myimage} alt="myimage" />
          <h2>Sephens</h2>
          <IoMdArrowDropdown />
        </div>

        {/* line */}
        <div className="line" />

        {/* recent repos */}

        <div className="recent-repo">
          <div className="recent-repos">
            <h4>Recent Repositories</h4>
            <button>New</button>
          </div>
          {/* find repo input */}
          <div className="input-box">
            <input type="text" placeholder="Find a repository..." />
          </div>
        </div>
        {/* list of repos */}
        <div className="main-left-list">
          {list.map((item, index) => (
            <div className="item" key={index}>
              <img src={myimage} alt="myimage" />

              <div>
                <h4>{`${item.name}/${item.repo}`}</h4>
              </div>
            </div>
          ))}

          <Link to="/Profile">Show More</Link>
        </div>

        <div className="line" />
        <div className="recent-repo">
          <div className="recent-repos">
            <h4>Recent Activity</h4>
          </div>
        </div>

        <div className="line" />

        <div className="recent-repo">
          <div className="recent-repos">
            <h4>Your Team</h4>
          </div>
          {/* find repo input */}
          <div className="input-box">
            <input type="text" placeholder="Find a team..." />
          </div>
        </div>
      </div>

      <div className="line" />


    </div>
  );
}

export default MainLeft;
