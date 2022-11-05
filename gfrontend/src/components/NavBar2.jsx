import React from "react";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { TiDeviceDesktop, TiFlowChildren } from "react-icons/ti";
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
            <div className="menu-container">
             
                <div className="main-menu">
                <ul>
                  <li>
                    <a href="#">
                      <TiFlowChildren /> Actions
                      <span>Automate any workflow</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiPackage /> Packages{" "}
                      <span>Host and Manage Packages</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <MdSecurity /> Security{" "}
                      <span>Find and fix vulnerabilities</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiDeviceDesktop /> Codespaces{" "}
                      <span>Instant dev environments</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Copilot <span>Write better code with AI</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TbMessageCode /> Code Review{" "}
                      <span>Manage code changes</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <GoEye /> Issues <span>Plan and track work</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <GoCommentDiscussion /> Discussions{" "}
                      <span>Collaborate outside of code</span>
                    </a>
                  </li>
                  </ul>
                </div>
                <div className="line"/>
                <div className="explore-product">
                <ul>
                <h6>Explore</h6>
                  <li>
                    <ul>
                      <li>
                        <a href="#">All Features</a>
                      </li>
                      <li>
                        <a href="#">Documentation</a>
                      </li>
                      <li>
                        <a href="#">GitHub Skills</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </li>
                  </ul>
                </div>
              </div>
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
            <a href="#">
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
