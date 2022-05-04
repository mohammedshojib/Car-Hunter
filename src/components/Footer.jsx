import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="footer-area">
        <div class="footer">
          <h1>Car Hunter</h1>
          <p>
            Copyright © 2020 Car Hunter <br />
            All right reserve
          </p>
        </div>
        <div class="icons">
          <span>
            <i>
              <FaFacebook />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaGithub />
            </i>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
