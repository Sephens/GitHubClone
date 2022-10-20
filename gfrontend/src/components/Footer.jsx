import React from "react";
import image from "../images/logo2.png";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="first-footer">
        <img src={image} alt="footerimg" />
        <AiOutlineCopyright />
        <h4>Steve</h4>
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
  );
}

export default Footer;
