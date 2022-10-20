import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import image from "../images/logo2.png";
import {Link} from 'react-router-dom'

function MainRight() {
  return (
    <div className="main-right">
      <div className="main-right-container">
        <div className="main-right-text">
          <h2>Following</h2>
          <h2>For You</h2>
        </div>

        <div className="line-two" />
        <div className="box">
          <h2>Welcome yo GitHub clone by Steve</h2>
          <p>
            This project is underway and am glad that you will enjoy the code
            and features
          </p>

          <button className="btn">
            <Link to="/Profile">Git Clone</Link>
          </button>
        </div>

        <div className="box-center">
          <div className="first-box-center">
            <IoBulbOutline />
            <p>
              On this Channel you will be able to learn more on REACT, MongoDB,
              Node.js and Express. In other words you will learn fullstack
              development with MERN
            </p>
          </div>
          <div className="first-box-center">
            <MdRssFeed />
            <p>Subscribe and follow for more updates.</p>
          </div>
        </div>
        {/* Footer */}
        <div className="footer">
          <div className="first-footer">
            <img src={image} alt="footerimg" />
            <h4>GitHub Clone</h4>
          </div>
          <div className="second-footer">
            <div className="second-footer-inside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>GitHub Clone</h4>
              <h4>Pricing</h4>
            </div>
            <div className="second-footer-inside">
            <h4>API</h4>
            <h4>Training</h4>
            <h4>Status</h4>
            <h4>Security</h4>
          </div>
            <div className="second-footer-inside">
            <h4>Terms</h4>
            <h4>Privacy</h4>
            <h4>Docs</h4>
          </div>
          </div>
          
        </div>
      </div>
      <div className="line-two"/>
    </div>
  );
}

export default MainRight;
