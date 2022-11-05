import React from "react";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { TiDeviceDesktop, TiFlowChildren,  } from "react-icons/ti"
import { TbMessageCode } from "react-icons/tb";
import { GoEye, GoCommentDiscussion } from "react-icons/go";


function NavBar2() {
  return (
    <nav className="nav-bar">
      {/* left */}
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* center */}
      <div className="nav-center">
        <ul>
          <li className="product">
            <a href="#">
              Product <RiArrowDropDownLine />
            </a>
            <div className="prod-menu">
              <ul>
                <li>
                  <a href="#"><TiFlowChildren/> Actions
                  <span>Automate any workflow</span>
                  </a>
                </li>
                <li>
                  <a href="#"><FiPackage/> Packages</a>
                </li>
                <li>
                  <a href="#"> <MdSecurity/> Security</a>
                </li>
                <li>
                  <a href="#"><TiDeviceDesktop/> Codespaces</a>
                </li>
                <li>
                  <a href="#">Copilot</a>
                </li>
                <li>
                  <a href="#"><TbMessageCode/> Code Review</a>
                </li>
                <li>
                  <a href="#"><GoEye/> Issues</a>
                </li>
                <li>
                  <a href="#"><GoCommentDiscussion/> Discussions</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="soln">
            <a href="#">
              Solution <RiArrowDropDownLine />
            </a>
            <div className="sol-menu">
              <ul>
                <li>
                  <a href="#">By Paln</a>
                </li>
                <li>
                  <a href="#">By Solution</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="open-source">
            <a href="#" >
              Open Source <RiArrowDropDownLine />
            </a>
            <div className="source-menu">
              <ul>
                <li>
                  <a href="#">GitHub Sponsors</a>
                </li>
                <li>
                  <a href="#">The ReadME Project</a>
                </li>
                <li>
                  <a href="#">Repositories</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        {/* <h4>Product</h4>
        <h4>Solution</h4>
        <h4>Open Source</h4>
        <h4>Pricing</h4> */}
      </div>
      {/* right */}

      <div className="nav-right">
        <div className="nav-right-ics">
          <div>
            <input type="text" placeholder="Search GitHub" />
          </div>
        </div>

        <div className="nav-right-ics">
          <Link to="/Login" className="links">
            <h4>Sign in</h4>
          </Link>

          <Link to="/SignUp" className="links">
            <h4 id="sign-up">Sign up</h4>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
